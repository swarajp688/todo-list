import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
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
