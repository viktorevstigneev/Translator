import React from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime/runtime';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Normalize } from 'styled-normalize';

import App from './App';
import CustomThemeProvider from './components/CustomThemeProvider';
import rootReducer from './store/reducers/root';
import initialState from './store/initialState';
import sagaWatcher from './store/sagas/watcher';
import { LOCAL_STORAGE_KEY } from './constants';

const saga = createSagaMiddleware();
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(saga)));

saga.run(sagaWatcher);

store.subscribe(() => {
	const theme = store.getState().theme;
	if (!theme) return;

	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(theme));
});

ReactDOM.render(
	<Provider store={store}>
		<CustomThemeProvider>
			<Normalize />
			<App />
		</CustomThemeProvider>
	</Provider>,
	document.querySelector('#root')
);
