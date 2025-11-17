import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HudOverlay from './HudOverlay';

beforeEach(() => {
  localStorage.clear();
  // @ts-ignore
  global.fetch = vi.fn(() =>
    Promise.resolve({ json: () => Promise.resolve({ value: 7, ts: new Date().toISOString() }) })
  );
});

afterEach(() => {
  // @ts-ignore
  global.fetch = undefined;
});

test('persists visibility to localStorage when toggled', async () => {
  render(<HudOverlay />);
  const btn = screen.getByRole('button', { name: /toggle hud/i });
  // Initially closed
  expect(localStorage.getItem('hud:visible')).toBeNull();
  await userEvent.click(btn);
  expect(localStorage.getItem('hud:visible')).toBe('true');
  await userEvent.click(btn);
  expect(localStorage.getItem('hud:visible')).toBe('false');
});
