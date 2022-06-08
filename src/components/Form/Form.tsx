import { useState } from 'react';
import { Button } from './Components';
import { author as AUTHOR } from '../../constants';
import style from './Form.module.css';
import { FC } from 'react';
import { AUTHORS, Message } from 'src/common-types'

interface FormProps {
	addMessage: (msg: Message) => void
}


export const Form: FC<FormProps> = ({ addMessage }) => {
	const [text, setText] = useState('');

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		addMessage({
			author: AUTHOR.user,
			text
		});
		setText('');
	};

	const buttonClick = () => null;

	return (
		<>
			<form data-testid="form" className={style.form} onSubmit={handleSubmit}>
				<input
					onChange={e => setText(e.target.value)}
					type="text"
					placeholder="Write message"
					className={style.input}
					value={text}
				/>
				<Button click={buttonClick} />
			</form>
		</>
	);
};
