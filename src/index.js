import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

import { searchBooks, requestBooks } from './reducers';

const logger = createLogger();

let middleware = [thunkMiddleware];

if (process.env.NODE_ENV !== 'production') {
    middleware = [...middleware, logger];
}

const rootReducer = combineReducers({ searchBooks, requestBooks });

const store = createStore(rootReducer, applyMiddleware(...middleware));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
