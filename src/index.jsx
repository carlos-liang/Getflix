import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import App from './App';
import './styles.css';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
