import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware  } from 'redux';
import myReducer from './reducer/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; 

var store = createStore(
    myReducer,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

registerServiceWorker();
