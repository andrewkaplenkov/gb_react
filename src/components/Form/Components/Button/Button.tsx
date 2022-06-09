import { FC } from 'react';
import ButtonEl from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

interface ButtonProps {
	click: () => void;
}

export const Button: FC<ButtonProps> = ({ click }) => (
	<ButtonEl
		onClick={click}
		type="submit"
		variant="contained"
		endIcon={<SendIcon />}>
		Send message
	</ButtonEl>
);
