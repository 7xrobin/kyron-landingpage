<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Component architecture

- **Primitive UI components** live in `components/ui/` — reusable, stateless building blocks (e.g. `GlassCard`, `SubCard`). No domain logic.
- **Feature/section components** live in `components/cards/` (or a similarly named domain folder) — compose UI primitives, own their data and layout.
- **Page-level components** (e.g. `Hero`) only import and arrange feature components. They should contain no inline styles or markup beyond a wrapper element.
- Before adding markup that already exists elsewhere, check if a primitive can be reused or extended instead of duplicated.
