import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';

import GlobalStyles from './styles/global';
import './config/reactotronConfig';
import {store, persistor} from './store';
import Routes from './routes/index';
import history from './services/history';

function App() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<Router history={history}>
					<ToastContainer autoClose={8000} />
					<GlobalStyles />
					<Routes />
				</Router>
			</PersistGate>
		</Provider>
	);
}

export default App;
