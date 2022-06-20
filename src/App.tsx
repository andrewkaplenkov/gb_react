import { FC, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { AppRouter } from './components/AppRouter/AppRouter';

import { store, persistor } from './store';

export const App: FC = () => (
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<Suspense fallback={<div>Loading...</div>}>
				<BrowserRouter>
					<AppRouter />
				</BrowserRouter>
			</Suspense>
		</PersistGate>
	</Provider>
);
