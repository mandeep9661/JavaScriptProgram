<!-- Auto-generated guidance for AI coding agents. Keep concise and actionable. -->
# Copilot instructions — JavaScriptProgram

Purpose
- Short, single-file learning repository containing beginner JavaScript snippets (no framework).

Big picture
- This repo currently contains one example file: `basics.js`. The project is educational: code shows console-based examples (variables, types, operators).
- No build system, package manager, or tests are present by default. Changes should avoid introducing heavy infra without asking the maintainer.

How to run locally (discoverable)
- Use Node.js to run examples: `node basics.js` (from repo root).

Project-specific patterns and conventions
- Files are simple scripts intended to be executed directly with Node. Prefer small, focused edits rather than adding complex tooling.
- Console output is the primary I/O pattern (use `console.log`).
- Code uses ES6 `let` and `const` for variables — avoid reintroducing `var` unless mimicking an example.
- Comments at the top of files include usage hints (keep them accurate when editing).

Integration points & dependencies
- None detected. Do not assume `npm`/`package.json` exists. If you add dependencies, also add a `package.json` and document install/run steps.

When modifying code
- Preserve the pedagogical intent: keep examples short and readable.
- If you refactor into modules, add a brief README update explaining the change and how to run examples.
- When adding files, follow a minimal structure: top-level examples, optional `test/` folder for unit tests.

Editing guidelines for AI agents
- Make minimal, self-contained edits and run the modified file with `node` to verify output.
- Add comments explaining non-obvious changes so a human reviewer can follow learning intent.
- Do not add CI, linters, or test frameworks without explicit instruction from the maintainer.

Files to reference
- `basics.js` — contains the canonical examples and the run hint inside comments.

If you need to extend the project
- Ask before introducing `npm` packages or CI. Propose changes as a short plan and include the single `node` command to validate examples.

Contact / follow-up
- After making edits, ask the user for feedback and whether they want tests, package.json, or additional examples added.
