import { useState } from 'react';
import { Button, Input } from './Components';
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

	const buttonClick = () => null;

	return (
		<>
			<form data-testid='form' className={style.form} onSubmit={handleSubmit}>
				<Input
					value={value}
					func={(e) => setValue(e.target.value)}
				/>
				<Button
					click={buttonClick}
					label="Send message" />
			</form>
		</>
	);
};
