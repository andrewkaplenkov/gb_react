import style from './Button.module.css';
import { FC } from 'react';

interface ButtonProps {
	click: () => void
}

export const Button: FC<ButtonProps> = ({ click }) => (
	<>
		<button
			onClick={click}
			className={style.button}>
			Send message
		</button>
	</>
);
