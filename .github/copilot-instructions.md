Purpose
-------
This file guides AI coding agents (Copilot-style) working in this workspace. The repository appears empty at the moment; these instructions explain what to look for, how to proceed, and the concrete commands and file locations that are meaningful for a Cypress-based Swag Labs test project.

Quick start (what the agent should do first)
- Check for common project files: `package.json`, `cypress.config.js` or `cypress.json`, `cypress/` directory, `README.md`.
- If files are missing, prompt the user to either provide the project files or confirm scaffolding (do not scaffold without confirmation).
- If files are present, read `package.json` scripts, `cypress.*` configs, and top-level README for project-specific commands.

Architecture to discover
- Typical Cypress layout (look for these paths):
  - `cypress/e2e` or `cypress/integration` — test specs
  - `cypress/support/` — `commands.js` / `commands.ts` and polyfills
  - `cypress/fixtures/` — JSON test data
  - `cypress/plugins/` or `cypress/plugins/index.js` — plugin hooks
  - `cypress/screenshots` and `cypress/videos` — CI artifacts
- Check for page-object style modules under `cypress/support/pages` or `src/pages` and custom helper utilities in `cypress/support`.

Developer workflows and commands
- Install dependencies (if `package.json` exists):
```bash
npm ci
```
- Run Cypress interactive runner:
```bash
npx cypress open
```
- Run headless tests (CI-friendly):
```bash
npx cypress run --browser chrome
```
- If `package.json` defines scripts (e.g. `test`, `e2e`), prefer `npm run <script>` to respect project configuration.

Conventions and patterns to expect
- Test files usually end with `.spec.js`, `.spec.ts`, `.cy.js` or `.cy.ts`.
- Custom commands are defined in `cypress/support/commands.(js|ts)` and are used widely (e.g., `cy.login()`); inspect that file first to learn test entry points.
- Project may use `cypress.env.json` or `CYPRESS_` environment variables for secrets/config. Never print secrets; ask for masked values when needed.
- Look for `baseUrl` in Cypress config (`cypress.config.js` or `cypress.json`) — most tests use relative URLs.

Integration points
- External services: tests for Swag Labs typically target https://www.saucedemo.com; check config for alternative `baseUrl` or proxy setups.
- CI: search for `.github/workflows` or pipeline files to learn how tests are run in CI and where artifacts are uploaded.

When writing code or edits
- Use existing patterns: if tests use page objects, follow that folder pattern and naming conventions.
- Add tests/specs adjacent to existing suites (same folder, same naming style).
- Prefer small, incremental PR-style edits. When modifying config, update the README with the exact commands to run.

Examples to look for (if present)
- `cypress/support/commands.js` — source of custom helpers
- `cypress/e2e/login.spec.js` — canonical example of test structure
- `package.json` scripts: prefer project `npm run` commands over ad-hoc `npx` calls when available

If the workspace is empty
- Report that the repository is empty and list the files you expect to find (package.json, cypress.config.js, cypress/...).
- Ask the user whether to: (A) upload project files, (B) initialize a starter Cypress scaffold, or (C) connect to an external repo/URL.

Merging guidance
- If this file already exists, preserve any user-provided notes under a "Local notes" or "Overrides" section and append these actionable checks under an "AI agent checklist" heading.

Ask for feedback
- If anything here is unclear or you'd like the agent to follow stricter rules (for example, specific test selectors, or a strict branching/PR format), reply with those constraints and the agent will incorporate them.
