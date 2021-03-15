import React from 'react';
import ReactDOM from 'react-dom';
import { Routes } from './routes';
import { ErrorProvider } from './context/errorContext';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <ErrorProvider>
      <Routes />
    </ErrorProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
