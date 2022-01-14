import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // our custom CSS
import App from './App';
// ======= IMPORT CSS PACKAGES
import 'bootstrap/dist/css/bootstrap.min.css'; // bootsrap v5

// ======= IMPORT JS PACKAGES
import 'bootstrap/dist/js/bootstrap.min.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
