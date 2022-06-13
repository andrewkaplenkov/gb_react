import { FC } from 'react';
import ButtonEl from '@mui/material/Button';

interface ButtonProps {
	click: () => void;
}

export const Button: FC<ButtonProps> = ({ click }) => (
	<ButtonEl
		onClick={click}
		type="submit"
		variant="contained"
	>
		Send message
	</ButtonEl>
);
