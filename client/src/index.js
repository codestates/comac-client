import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

console.log(process.env.NODE_ENV) //check if development!!!!

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



