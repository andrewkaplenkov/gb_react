import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { Input } from './Input';

describe('Input', () => {
  it('input component render', () => {
    render(<Input placeholder="Write message" />);
    expect(screen.getByPlaceholderText(/Write message/)).toBeInTheDocument();
  });

  it('input change', async () => {
    const handler = jest.fn();
    render(<Input onChange={handler} />);
    await userEvent.hover(screen.getByRole('textbox'));
  });
});
