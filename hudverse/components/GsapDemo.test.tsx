import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GsapDemo from './GsapDemo';

test('GsapDemo renders controls', async () => {
  render(<GsapDemo />);
  expect(screen.getByRole('button', { name: /pause/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /reverse/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /replay/i })).toBeInTheDocument();

  // basic interaction
  const user = userEvent.setup();
  const replay = screen.getByRole('button', { name: /replay/i });
  await user.click(replay);
});
