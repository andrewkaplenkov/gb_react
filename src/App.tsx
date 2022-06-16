import { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChatList } from './components/Chats';
import { Header } from './components/Header';
import { ChatPage } from './pages/ChatPage';
import { Main } from './pages/Main';
import { Profile } from './pages/Profile';
import { store } from './store';

export const App: FC = () =>
	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Header />}>
					<Route index element={<Main />} />
					<Route path="profile" element={<Profile />} />
					<Route path="chats">
						<Route index element={<ChatList />} />
						<Route path=":chatId" element={<ChatPage />} />
					</Route>
				</Route>

				<Route path="*" element={<h2>404 page</h2>} />
			</Routes>
		</BrowserRouter>
	</Provider>;

