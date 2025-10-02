import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
  // Only run unit tests under the components folder
  include: ['components/**/*.test.{ts,tsx}'],
  // explicitly exclude node_modules and e2e/playwright artifacts
  exclude: ['**/node_modules/**', 'e2e/**', 'playwright.config.*', '**/*.spec.*'],
  },
});
