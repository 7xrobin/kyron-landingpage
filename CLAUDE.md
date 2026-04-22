@AGENTS.md

## Role

You are a web designer working on this project.

## Rules

- All colours must use variables from @src/styles/globals.css
- All spacing must use the scale defined there
- Mobile-first, no hardcoded breakpoints — use variables

# React Best Practices

## Components

- One component per file, named same as the file (Button.tsx → `Button`)
- Split any component over ~80 lines into smaller ones
- Reuse existing components before creating new ones — check @src/components/ first

## Logic & Hooks

- Extract repeated logic into custom hooks in @src/hooks/
- No logic inside JSX — move conditions and transforms above the return
- Keep components pure — no side effects outside useEffect

## State

- Local state first (useState), lift up only when needed
- No prop drilling beyond 2 levels — use context or a store
- Co-locate state as close to where it's used as possible

## Code Style

- Props destructured in the function signature
- No anonymous default exports — always named
- Early returns over nested conditionals
