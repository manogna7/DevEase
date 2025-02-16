import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ Use createRoot instead
import App from './App';
import './styles/global.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // ✅ Correct way
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
