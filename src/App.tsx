import { nanoid } from 'nanoid';
import { FC, useMemo, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Chat, Message, Messages } from './common-types';
import { ChatList } from './components/Chats';
import { Header } from './components/Header';
import { ChatPage } from './pages/ChatPage';
import { Main } from './pages/Main';
import { Profile } from './pages/Profile';

const defaultChats: Chat[] = [
	{
		id: nanoid(),
		name: 'Default chat',
	},
];

const defaultMessages: Messages = {
	default: [],
};

export const App: FC = () => {
	const [messages, setMesseges] = useState(defaultMessages);

	const chats = useMemo(() =>
		Object.keys(messages).map((chat) => ({
			id: nanoid(),
			name: chat,
		})),
		[Object.keys(messages).length]
	);

	const addChat = (newChat: Chat) => {
		setMesseges({
			...messages,
			[newChat.name]: [],
		});
	};

	const addMessage = (chatId: string, newMessage: Message) => {
		setMesseges({
			...messages,
			[chatId]: [...messages[chatId], newMessage],
		});
	};

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Header />}>
					<Route index element={<Main />} />
					<Route path="profile" element={<Profile />} />
					<Route path="chats">
						<Route
							index
							element={
								<ChatList
									chats={chats}
									addChat={addChat} />}
						/>
						<Route
							path=":chatId"
							element={
								<ChatPage
									chats={chats}
									addChat={addChat}
									messages={messages}
									addMessage={addMessage}
								/>
							}
						/>
					</Route>
				</Route>

				<Route path="*" element={<h2>404 page</h2>} />
			</Routes>
		</BrowserRouter>
	);
};
