import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HudOverlay from './HudOverlay';

beforeEach(() => {
  // @ts-ignore
  global.fetch = vi.fn(() =>
    Promise.resolve({ json: () => Promise.resolve({ value: 9, ts: new Date().toISOString() }) })
  );
});

afterEach(() => {
  // @ts-ignore
  global.fetch = undefined;
});

test('pressing H toggles HUD visibility', async () => {
  render(<HudOverlay />);
  // Press H to open
  await userEvent.keyboard('h');
  expect(screen.getByText(/HUD Overlay/i)).toBeInTheDocument();
  // Press H again to close
  await userEvent.keyboard('h');
  expect(screen.queryByText(/HUD Overlay/i)).toBeNull();
});
