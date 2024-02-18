import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD:src/index.jsx
import { BrowserRouter } from 'react-router-dom';
import App from './App.js'
=======
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx'
>>>>>>> parent of 4f1179e (a):src/index.js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <React.StrictMode>
    <App/>
  </React.StrictMode>
  </Router>
);