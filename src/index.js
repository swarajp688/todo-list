import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import { BrowserRouter } from "react-router-dom";
import { TodoProvider } from './Providers/TodoProvider';
import {ToastProvider} from 'react-toast-notifications';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ToastProvider>
    <TodoProvider>
    <App />
    </TodoProvider>
    </ToastProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

