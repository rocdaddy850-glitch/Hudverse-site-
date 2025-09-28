# Running tests for hudverse

## Unit tests (Vitest)

1. Install dependencies:

```bash
cd hudverse
npm ci
```

2. Run unit tests:

```bash
npm run test:hudverse
```

## E2E tests (Playwright)

1. Install Playwright browsers:

```bash
npx playwright install
```

2. Run E2E tests headless:

```bash
npm run e2e
```

## CI notes

- The repository contains a GitHub Actions workflow at `.github/workflows/hudverse-playwright-e2e.yml`.
- The workflow builds the app, starts it, installs Playwright browsers, and runs E2E tests headless.

## Troubleshooting

- If Playwright can't find browsers, run `npx playwright install` locally.
- If the dev server fails due to Tailwind/PostCSS native bindings, see the README and consider pinning JS-only fallbacks.
Running tests for hudverse

Unit tests (Vitest):

  npm ci
  npm run test:hudverse

E2E tests (Playwright):

  # install browsers first
  npx playwright install

  # run all e2e tests headless
  npm run e2e

CI notes:
 - The repository contains a GitHub Actions workflow at .github/workflows/hudverse-playwright-e2e.yml
 - The workflow builds the app, starts it, installs Playwright browsers, and runs e2e tests headless.

Troubleshooting:
 - If Playwright can't find browsers, run `npx playwright install` locally.
 - If the dev server fails due to Tailwind/PostCSS native bindings, see the README and consider pinning JS-only fallbacks.
Running tests locally

If you want to run the unit tests locally under the `hudverse` folder, follow these steps:

1. Change into the `hudverse` folder:

```bash
cd hudverse
```

2. Install dependencies. This project has a few peer-dependency constraints; if `npm ci` fails due to peer resolution, use the legacy resolver which was used during development here:

```bash
# preferred (uses package-lock.json):
npm ci --no-audit --no-fund

# fallback when peer conflicts occur (works in this repo):
npm install --legacy-peer-deps --no-audit --no-fund
```

3. Run the test suite with Vitest:

```bash
npx vitest run --reporter verbose
```

Notes:
- The `--legacy-peer-deps` workaround is only suggested for local development when npm refuses to resolve older peer constraints; CI will install dependencies cleanly for PRs.
- If you use `pnpm` or `yarn`, follow your package manager's install flow; adjust commands accordingly.
