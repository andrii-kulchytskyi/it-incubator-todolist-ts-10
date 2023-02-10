import React from 'react';
import './index.css';
import App from './App';
import {createRoot} from 'react-dom/client';
import * as serviceWorker from './serviceWorker';
import AppWithReducer from "./AppWithReducer";
import { store } from './state/store'
import { Provider } from 'react-redux'
import AppWithRedux from "./AppWithRedux";
import ReactDOM from 'react-dom';

ReactDOM.render(
    <Provider store={store}>
        <AppWithRedux/>
    </Provider>, document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
