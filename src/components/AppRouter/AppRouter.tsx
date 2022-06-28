import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AboutWithConnect } from 'src/pages/About';
import { Articles } from 'src/pages/Articles';
import { ChatPage } from 'src/pages/ChatPage';
import { Main } from 'src/pages/Main';
import { Profile } from 'src/pages/Profile';
import { SignIn } from 'src/pages/SignIn';
import { ChatList } from '../Chats';
import { Header } from '../Header';
import { PrivateRoute } from './PrivatRoutes';
import { PublicRoute } from './PublicRoutes';

export const AppRouter: FC = () => (

	<Routes>
		<Route path="/" element={<Header />}>
			<Route index element={<Main />} />
			<Route
				path="profile"
				element={<PrivateRoute component={<Profile />} />}
			/>
			<Route path="articles" element={<Articles />} />
			<Route path="about" element={<AboutWithConnect />} />
			<Route path="signin" element={<PublicRoute component={<SignIn />} />} />
			<Route path="chats" element={<PrivateRoute />}>
				<Route index element={<ChatList />} />
				<Route path=":chatId" element={<ChatPage />} />
			</Route>
		</Route>
	</Routes>
);
