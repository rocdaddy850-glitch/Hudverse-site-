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
