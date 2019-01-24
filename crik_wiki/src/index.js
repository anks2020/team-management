import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import { configureStore } from './store/index';

const app = (<Provider store={configureStore()}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>)
ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
