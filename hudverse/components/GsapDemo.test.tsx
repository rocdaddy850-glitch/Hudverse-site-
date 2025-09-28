import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GsapDemo from './GsapDemo';

test('GsapDemo renders controls', async () => {
  render(<GsapDemo />);
  expect(screen.getByText('Pause')).toBeInTheDocument();
  expect(screen.getByText('Reverse')).toBeInTheDocument();
  expect(screen.getByText('Replay')).toBeInTheDocument();

  // basic interaction
  const replay = screen.getByText('Replay');
  await userEvent.click(replay);
});
