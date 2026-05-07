"use client";

import { useEffect, useRef, useState } from "react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const TOPIC_CARDS = [
  { tag: "finances", title: "Show me my finances overview" },
  { tag: "goal", title: "Help me set a goal" },
  { tag: "taxes", title: "Understand my taxes & legislation" },
  { tag: "investment", title: "Plan my investment strategy" },
] as const;

// ─── SVG Icons ────────────────────────────────────────────────────────────────

function FinancesIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient
          id="grad-finances"
          x1="0"
          y1="24"
          x2="24"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7f77dd" />
          <stop offset="1" stopColor="#5dcaa5" />
        </linearGradient>
      </defs>
      <rect
        x="3"
        y="12"
        width="4"
        height="9"
        rx="1"
        fill="url(#grad-finances)"
      />
      <rect
        x="10"
        y="7"
        width="4"
        height="14"
        rx="1"
        fill="url(#grad-finances)"
      />
      <rect
        x="17"
        y="3"
        width="4"
        height="18"
        rx="1"
        fill="url(#grad-finances)"
      />
    </svg>
  );
}

function GoalIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient
          id="grad-goal"
          x1="0"
          y1="24"
          x2="24"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7f77dd" />
          <stop offset="1" stopColor="#5dcaa5" />
        </linearGradient>
      </defs>
      <line
        x1="5"
        y1="3"
        x2="5"
        y2="21"
        stroke="url(#grad-goal)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M5 4 L18 8 L5 12" fill="url(#grad-goal)" />
    </svg>
  );
}

function TaxesIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient
          id="grad-taxes"
          x1="0"
          y1="24"
          x2="24"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7f77dd" />
          <stop offset="1" stopColor="#5dcaa5" />
        </linearGradient>
      </defs>
      <rect
        x="4"
        y="2"
        width="16"
        height="20"
        rx="2"
        stroke="url(#grad-taxes)"
        strokeWidth="1.5"
      />
      <line
        x1="8"
        y1="8"
        x2="16"
        y2="8"
        stroke="url(#grad-taxes)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="8"
        y1="12"
        x2="16"
        y2="12"
        stroke="url(#grad-taxes)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="8"
        y1="16"
        x2="12"
        y2="16"
        stroke="url(#grad-taxes)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function InvestmentIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient
          id="grad-invest"
          x1="0"
          y1="24"
          x2="24"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7f77dd" />
          <stop offset="1" stopColor="#5dcaa5" />
        </linearGradient>
      </defs>
      <polyline
        points="3,17 9,11 13,15 21,5"
        stroke="url(#grad-invest)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="16,5 21,5 21,10"
        stroke="url(#grad-invest)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const TOPIC_ICONS = {
  finances: <FinancesIcon />,
  goal: <GoalIcon />,
  taxes: <TaxesIcon />,
  investment: <InvestmentIcon />,
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function AssistantAvatar() {
  return (
    <div
      className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5"
      style={{ background: "linear-gradient(135deg, #7f77dd, #f97316)" }}
    />
  );
}

function MessageBubble({ message }: { message: Message }) {
  const isUser = message.role === "user";

  if (!isUser) {
    return (
      <div className="flex items-start gap-2 justify-start">
        <AssistantAvatar />
        <p className="text-sm text-black/90 leading-relaxed max-w-[80%]">
          {message.content || (
            <span className="animate-pulse opacity-70">▍</span>
          )}
        </p>
      </div>
    );
  }

  return (
    <div className="flex justify-end">
      <div
        className="text-sm px-3 py-2 max-w-[80%] text-black rounded-2xl rounded-tr-sm"
        style={{
          background: "rgba(255,255,255,0.65)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        {message.content}
      </div>
    </div>
  );
}

function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M14 8 L2 2 L5 8 L2 14 Z" fill="white" />
    </svg>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function HeroAiChat({ onClose }: { onClose?: () => void }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showTopics, setShowTopics] = useState(true);
  const [turnCount, setTurnCount] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const threadRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    threadRef.current?.scrollTo({ top: threadRef.current.scrollHeight });
  }, [messages]);

  useEffect(() => {
    if (!error) return;
    const t = setTimeout(() => setError(null), 4000);
    return () => clearTimeout(t);
  }, [error]);

  async function sendMessage(text: string) {
    if (isLoading || !text.trim()) return;

    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: text.trim(),
    };

    const nextMessages = [...messages, userMsg];

    setHasInteracted(true);
    setMessages(nextMessages);
    setInput("");
    setTurnCount((prev) => prev + 1);
    setIsLoading(true);
    inputRef.current?.focus({ preventScroll: true });

    const assistantId = crypto.randomUUID();
    setMessages((prev) => [
      ...prev,
      { id: assistantId, role: "assistant", content: "" },
    ]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.map(({ role, content }) => ({
            role,
            content,
          })),
        }),
      });

      if (!res.ok || !res.body) {
        throw new Error(await res.text());
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId ? { ...m, content: m.content + chunk } : m,
          ),
        );
      }
    } catch (err) {
      setMessages((prev) => prev.filter((m) => m.id !== assistantId));
      setError("Something went wrong. Please try again.");
      console.error("[kyron:chat]", err);
    } finally {
      setIsLoading(false);
    }
  }

  function trackIntent(tag: string) {
    // TODO: track intent here
    console.log("[kyron:intent]", tag);
  }

  function handleTopicSelect(tag: string, title: string) {
    setShowTopics(false);
    trackIntent(tag);
    sendMessage(title);
  }

  const showCTA = turnCount >= 6;

  return (
    <div
      className="relative flex flex-col w-full sm:w-[360px] h-[100dvh] sm:h-[620px] rounded-none sm:rounded-[40px]"
      style={{
        background: "rgba(255, 255, 255, 0.5)",
        backdropFilter: "blur(48px) saturate(160%)",
        WebkitBackdropFilter: "blur(48px) saturate(160%)",
        border: "1px solid rgba(255, 255, 255, 0.6)",
        boxShadow:
          "0 8px 40px rgba(0, 0, 0, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.7)",
        overflow: "hidden",
      }}
    >
      {/* Specular top-edge highlight */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: "40%",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0) 100%)",
          borderRadius: "inherit",
          zIndex: 1,
        }}
      />

      {/* Top bar */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-black/10 relative z-10 flex-shrink-0">
        {/* Avatar */}
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: "linear-gradient(90deg, #f04e7a, #f97316)" }}
        >
          <span className="text-white text-sm font-bold">K</span>
        </div>
        {/* Name */}
        <div className="flex flex-col">
          <span className="text-gray-900 text-sm font-semibold leading-tight">
            Kyron
          </span>
          <span className="text-gray-500 text-xs leading-tight">
            AI assistant
          </span>
        </div>
        {/* Close button */}
        {onClose && (
          <button
            onClick={onClose}
            className="ml-auto flex items-center justify-center w-8 h-8 rounded-full text-gray-400 hover:text-gray-700 hover:bg-black/8 transition-colors"
            aria-label="Close chat"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 1L13 13M13 1L1 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Chat thread */}
      <div
        ref={threadRef}
        className="flex-1 overflow-y-auto px-4 flex flex-col relative z-10"
        style={{ scrollbarWidth: "none" } as React.CSSProperties}
      >
        {/* Hero heading — shown before first interaction */}
        <div
          className="absolute inset-x-0 px-6 flex flex-col items-center justify-center pointer-events-none"
          style={{
            top: 0,
            bottom: 0,
            opacity: hasInteracted ? 0 : 1,
            transform: hasInteracted ? "scale(0.95)" : "scale(1)",
            transition: "opacity 400ms ease, transform 400ms ease",
          }}
        >
          <p className="text-gray-900 text-[22px] font-medium text-center leading-snug">
            Hi, I&apos;m Kyron.
          </p>
          <p className="text-gray-900 text-[22px] font-medium text-center leading-snug mt-1">
            How can we improve your finances today?
          </p>
        </div>

        {/* Message list — shown after first interaction */}
        <div
          className="flex flex-col gap-3 py-3"
          style={{
            opacity: hasInteracted ? 1 : 0,
            transition: "opacity 400ms ease 100ms",
          }}
        >
          {messages.map((msg) => (
            <MessageBubble key={msg.id} message={msg} />
          ))}
        </div>
      </div>

      {/* Topics carousel */}
      <div
        className={`flex-shrink-0 border-t border-black/10 relative z-10 transition-opacity duration-300 ${
          showTopics ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="flex flex-row gap-3 px-4 py-3 overflow-x-auto"
          style={{ scrollbarWidth: "none" } as React.CSSProperties}
        >
          {TOPIC_CARDS.map(({ tag, title }) => (
            <button
              key={tag}
              onClick={() => handleTopicSelect(tag, title)}
              className="flex flex-col gap-2 flex-shrink-0 min-w-[140px] rounded-2xl px-3 py-3 cursor-pointer transition-opacity hover:opacity-80 text-left"
              style={{
                background: "rgba(255,255,255,0.65)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              {TOPIC_ICONS[tag]}
              <span className="text-gray-800 text-xs leading-snug">
                {title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Input area */}
      <div className="flex-shrink-0 border-t border-black/10 relative z-10">
        {error && (
          <div className="mx-3 mt-3 bg-red-500/15 border border-red-500/25 text-red-700 text-xs rounded-xl px-3 py-2 flex items-center justify-between">
            <span>{error}</span>
            <button
              onClick={() => setError(null)}
              className="text-red-400 hover:text-red-600 ml-2 leading-none"
            >
              ✕
            </button>
          </div>
        )}
        {/* TODO: remove CTA button */}
        {showCTA ? (
          <div className="p-4 flex justify-center">
            <button
              onClick={() =>
                document
                  .querySelector("#pricing")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full px-6 py-3 text-white text-sm font-semibold"
              style={{ background: "linear-gradient(90deg, #f04e7a, #f97316)" }}
            >
              See how Kyron can help →
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-2 p-3">
            <div
              className={`flex items-center gap-2 rounded-full px-4 py-2 transition-opacity ${
                isLoading ? "opacity-50" : "opacity-100"
              }`}
              style={{
                background: "rgba(255,255,255,0.65)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                disabled={isLoading}
                placeholder="Ask me anything…"
                className="flex-1 bg-transparent outline-none text-sm text-black placeholder:text-black/40"
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={isLoading || !input.trim()}
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 disabled:opacity-40 transition-opacity"
                style={{
                  background: "linear-gradient(90deg, #f04e7a, #f97316)",
                }}
              >
                {isLoading ? (
                  <svg
                    className="animate-spin"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <circle
                      cx="8"
                      cy="8"
                      r="6"
                      stroke="white"
                      strokeWidth="2"
                      strokeDasharray="28"
                      strokeDashoffset="10"
                    />
                  </svg>
                ) : (
                  <SendIcon />
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
