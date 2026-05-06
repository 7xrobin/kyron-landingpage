import OpenAI from "openai";
import { SYSTEM_PROMPT } from "@/lib/systemPrompt";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const MAX_MESSAGES = 20;
const MAX_CONTENT_LENGTH = 500;
const ALLOWED_ROLES = new Set(["user", "assistant"]);

interface IncomingMessage {
  role: string;
  content: string;
}

function validate(messages: unknown): messages is IncomingMessage[] {
  if (!Array.isArray(messages)) return false;
  if (messages.length === 0 || messages.length > MAX_MESSAGES) return false;
  return messages.every(
    (m) =>
      typeof m === "object" &&
      m !== null &&
      ALLOWED_ROLES.has((m as IncomingMessage).role) &&
      typeof (m as IncomingMessage).content === "string" &&
      (m as IncomingMessage).content.trim().length > 0 &&
      (m as IncomingMessage).content.length <= MAX_CONTENT_LENGTH
  );
}

export async function POST(req: Request) {
  if (!process.env.OPENAI_API_KEY) {
    return new Response("Service unavailable", { status: 503 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return new Response("Bad request", { status: 400 });
  }

  const { messages } = body as { messages: unknown };

  if (!validate(messages)) {
    return new Response("Invalid messages", { status: 422 });
  }

  const sanitized = messages.map((m) => ({
    role: m.role as "user" | "assistant",
    content: m.content.trim(),
  }));

  // Last message must be from the user
  if (sanitized[sanitized.length - 1].role !== "user") {
    return new Response("Last message must be from user", { status: 422 });
  }

  try {
    const stream = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...sanitized],
      stream: true,
      max_tokens: 300,
      temperature: 0.7,
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const text = chunk.choices[0]?.delta?.content ?? "";
            if (text) controller.enqueue(encoder.encode(text));
          }
        } finally {
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Content-Type-Options": "nosniff",
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("[kyron:chat]", err);
    return new Response("Something went wrong", { status: 500 });
  }
}
