import { test, expect } from '@playwright/test';

test('cross-tab storage sync toggles HUD', async ({ browser }) => {
  // Create one context and two pages to simulate two tabs (they share localStorage)
  const context = await browser.newContext();
  const pageA = await context.newPage();
  const pageB = await context.newPage();

  // Navigate both to local dev server (adjust host/port as needed)
  await pageA.goto('http://localhost:3000');
  await pageB.goto('http://localhost:3000');

  // Ensure HUD button exists in A and click to open
  const btnA = await pageA.getByRole('button', { name: /toggle hud/i });
  await btnA.click();
  // The first page should set localStorage; the other page should observe the HUD open.
  const btnB = await pageB.getByRole('button', { name: /toggle hud/i });

  // Wait until pageB shows the HUD opened (button text becomes 'Hide HUD')
  await expect(pageB.getByRole('button', { name: /hide hud/i })).toBeVisible();

  // Now click the button in pageB to close the HUD (this writes localStorage and triggers storage event in pageA)
  await (await pageB.getByRole('button', { name: /hide hud/i })).click();

  // Allow debounce window to elapse
  await pageA.waitForTimeout(400);

  // Now assert the toggle button in pageA shows the closed state (label 'Show HUD')
  const closedBtn = await pageA.getByRole('button', { name: /show hud/i });
  await expect(closedBtn).toBeVisible();

  await context.close();
});
