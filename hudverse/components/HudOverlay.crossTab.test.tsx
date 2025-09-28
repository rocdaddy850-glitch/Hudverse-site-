import React from 'react';
import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HudOverlay from './HudOverlay';

test('cross-tab storage event syncs visibility', async () => {
  render(<HudOverlay />);
  const btn = screen.getByRole('button', { name: /toggle hud/i });

  // Initially closed
  expect(localStorage.getItem('hud:visible')).toBeNull();

  // Toggle open
  const user = userEvent.setup();
  await user.click(btn);
  expect(localStorage.getItem('hud:visible')).toBe('true');

  // Simulate storage event from another tab
  const storageEvent = new StorageEvent('storage', {
    key: 'hud:visible',
    newValue: 'false',
  } as any);
  window.dispatchEvent(storageEvent);

  // HUD should now be closed
  expect(localStorage.getItem('hud:visible')).toBe('false');
});
