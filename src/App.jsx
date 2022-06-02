import { useEffect, useState } from 'react';
import { MessageList as Message } from './components/Message/MessageList';
import { Form } from './components/Form/Form';
import { author as AUTHOR } from './constants';

export const App = () => {
	const [messages, setMessages] = useState([]);

	const addMessage = (newMessage) => {
		setMessages([...messages, newMessage]);
	};

	useEffect(() => {
		if (
			messages.length &&
			messages[messages.length - 1].author === AUTHOR.user
		) {
			const timeOut = setTimeout(() => {
				addMessage({
					author: AUTHOR.bot,
					text: 'response from BOT',
				});
			}, 1000);

			return () => {
				clearTimeout(timeOut);
			};
		}
	}, [messages]);

	return (
		<>
			<Message messages={messages} />
			<Form addMessage={addMessage} />
		</>
	);
};
