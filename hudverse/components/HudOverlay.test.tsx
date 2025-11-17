import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test, expect, vi, beforeEach, afterEach } from 'vitest';
import HudOverlay from './HudOverlay';

beforeEach(() => {
  // @ts-ignore
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ value: 123, ts: new Date().toISOString() }),
    })
  );
});

afterEach(() => {
  // @ts-ignore
  global.fetch = undefined;
});

test('HUD overlay fetches metric and displays it', async () => {
  const user = userEvent.setup();
  render(<HudOverlay />);
  const btn = screen.getByRole('button', { name: /show hud|hide hud/i });
  await user.click(btn);

  await waitFor(() => {
    expect(screen.getByText(/^Metric$/i)).toBeInTheDocument();
    expect(screen.getByText('123')).toBeInTheDocument();
  });
});
