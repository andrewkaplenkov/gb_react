import { useState } from 'react';
import { Button } from './Components';
import style from './Form.module.css';
import { FC } from 'react';
import { AUTHORS, Message } from 'src/common-types';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box'


interface FormProps {
	addMessage: (msg: Message) => void;
}

export const Form: FC<FormProps> = ({ addMessage }) => {
	const [text, setText] = useState('');

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		addMessage({
			author: AUTHORS.USER,
			text,
		});
		setText('');
	};

	const buttonClick = () => null;

	return (
		<Box
			component="form"
			data-testid="form"
			className={style.form}
			onSubmit={handleSubmit}

		>
			<TextField
				id="outlined-basic"
				variant="outlined"
				onChange={(e) => setText(e.target.value)}
				type="text"
				placeholder="Write message"
				className={style.input}
				value={text}
				size="small"
			/>
			<Button
				click={buttonClick}
			/>
		</Box>
	);
};
