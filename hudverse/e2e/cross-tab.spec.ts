import { test, expect } from '@playwright/test';

test('cross-tab storage sync toggles HUD', async ({ browser }) => {
  // Create two contexts to simulate two tabs
  const contextA = await browser.newContext();
  const contextB = await browser.newContext();

  const pageA = await contextA.newPage();
  const pageB = await contextB.newPage();

  // Navigate both to local dev server (adjust host/port as needed)
  await pageA.goto('http://localhost:3000');
  await pageB.goto('http://localhost:3000');

  // Ensure HUD button exists in A and click to open
  const btnA = await pageA.getByRole('button', { name: /toggle hud/i });
  await btnA.click();

  // The first page should set localStorage; now simulate storage event by writing in pageB
  await pageB.evaluate(() => {
    localStorage.setItem('hud:visible', 'false');
    // Dispatch storage event on window
    window.dispatchEvent(new StorageEvent('storage', { key: 'hud:visible', newValue: 'false' } as any));
  });

  // Allow some time for debounced handler
  await pageA.waitForTimeout(200);

  // Now check pageA no longer shows HUD content
  const hud = await pageA.locator('#hud-overlay');
  await expect(hud).toHaveCount(0);

  await contextA.close();
  await contextB.close();
});
