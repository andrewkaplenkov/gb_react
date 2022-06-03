import { useState } from 'react';
import { author as AUTHOR } from '../../constants';
import style from './Form.module.css'

export const Form = ({ addMessage }) => {
	const [value, setValue] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		addMessage({
			author: AUTHOR.user,
			text: value,
		});
		setValue('');
	};

	return (
		<form className={style.form} onSubmit={handleSubmit}>
			<input
				className={style.input}
				type="text"
				placeholder="Write message"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<button className={style.button}>Send message</button>
		</form>
	);
};
