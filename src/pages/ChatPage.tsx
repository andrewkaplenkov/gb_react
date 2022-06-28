import { FC } from 'react';
import { Form } from 'components/Form/Form';
import { MessageList } from 'components/MessageList';
import { ChatList } from 'src/components/Chats';
import { Navigate, useParams } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';
import { selectMessages } from 'src/store/messages/selectors';

export const ChatPage: FC = () => {
	const { chatId } = useParams();

	const messages = useSelector(selectMessages, shallowEqual);

	if (chatId && !messages[chatId]) {
		return <Navigate to="/chats" />;
	}

	return (
		<>
			<ChatList />
			<MessageList messages={chatId ? messages[chatId] : []} />
			<Form />
		</>
	);
};
