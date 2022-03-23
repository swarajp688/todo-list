import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { TodoProvider } from './Providers/TodoProvider';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <TodoProvider>
    <App />
    </TodoProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
