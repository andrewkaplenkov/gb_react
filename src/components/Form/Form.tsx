import { useState } from 'react';
import { Button } from './Components';
import style from './Form.module.css';
import { FC } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addMessageWithReply } from 'src/store/messages/actions';
import { ThunkDispatch } from 'redux-thunk';
import { Authors } from 'src/common-types';

export const Form: FC = () => {
	const [text, setText] = useState('');

	const dispatch = useDispatch<ThunkDispatch<any, void, any>>();
	const { chatId } = useParams();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (chatId) {
			dispatch(addMessageWithReply(chatId, { author: Authors.USER, text }));
		}

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
				autoFocus
			/>
			<Button click={buttonClick} />
		</Box>
	);
};
