import React from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime/runtime';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './App';
import rootReducer from './store/reducers/root';
import initialState from './store/initialState';
import sagaWatcher from './store/sagas/watcher';


const saga = createSagaMiddleware();
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(saga)));

saga.run(sagaWatcher);

ReactDOM.render(
	<Provider store={store}>
			<App />
	</Provider>,
	document.querySelector('#root')
);
