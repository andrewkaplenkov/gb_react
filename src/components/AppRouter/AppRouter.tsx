import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AboutWithConnect } from 'src/pages/About';
import { ChatPage } from 'src/pages/ChatPage';
import { Main } from 'src/pages/Main';
import { Profile } from 'src/pages/Profile';
import { ChatList } from '../Chats';
import { Header } from '../Header';

export const AppRouter: FC = () => (
	<Routes>
		<Route path="/" element={<Header />}>
			<Route index element={<Main />} />
			<Route path="profile" element={<Profile />} />
			<Route path="about" element={<AboutWithConnect />} />
			<Route path="chats">
				<Route index element={<ChatList />} />
				<Route path=":chatId" element={<ChatPage />} />
			</Route>
		</Route>

		<Route path="*" element={<h2>404 page</h2>} />
	</Routes>
);