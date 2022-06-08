import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { Button } from './Button';

describe('Button', () => {
	it('render button component', () => {
		render(<Button click={() => null} />);
	});

	it('button click', async () => {
		const handle = jest.fn();
		render(<Button click={handle} />);
		await userEvent.click(screen.getByRole('button'));
		expect(handle).toHaveBeenCalledTimes(1);
	});

	it('button click with timeout', async () => {
		const handle = jest.fn();
		render(<Button click={() => setTimeout(handle, 1500)} />);
		await userEvent.click(screen.getByRole('button'));
		await waitFor(() => expect(handle).toHaveBeenCalledTimes(1), {
			timeout: 1600,
		});
	});
});
