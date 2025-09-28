import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import HudOverlay from './HudOverlay';

beforeEach(() => {
  // @ts-ignore
  global.fetch = vi.fn(() =>
    Promise.resolve({ json: () => Promise.resolve({ value: 123, ts: new Date().toISOString() }) })
  );
});

afterEach(() => {
  // @ts-ignore
  global.fetch = undefined;
});

test('HUD overlay fetches metric and displays it', async () => {
  render(<HudOverlay />);
  const btn = screen.getByRole('button', { name: /show hud|hide hud/i });
  btn.click();

  // wait for the exact 'Metric' label and value to appear
  await screen.findByText(/^Metric$/i);
  expect(screen.getByText('123')).toBeInTheDocument();
});
