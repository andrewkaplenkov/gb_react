import { FC, useEffect, useMemo, useState } from 'react';
import { Form } from 'components/Form/Form';
import { MessageList } from 'components/MessageList';
import { ChatList } from 'src/components/Chats';
import { Navigate, useParams } from 'react-router-dom';

import { onValue } from 'firebase/database';
import { messagesRef } from 'src/services/firebase';

interface ChatPageProps {
	chats: any[];
	messagesDB: any;
}

export const ChatPage: FC<ChatPageProps> = ({ chats, messagesDB }) => {
	const { chatId } = useParams();

	if (chatId && !messagesDB.find((chat: any) => chat?.name === chatId)) {
		console.log('redirect');
		return <Navigate to="/chats" replace />;
	}

	const messages = Object.entries(
		messagesDB.find((chat: any) => chat?.name === chatId).messageList
	).map((message: any) => ({
		id: message[0],
		text: message[1].text,
		author: message[1].author,
	}));


	return (
		<>
			<ChatList chats={chats} messagesDB={messagesDB} />
			<MessageList messages={chatId ? messages : []} />
			<Form />
		</>
	);
};
