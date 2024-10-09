import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure you are using the correct import
import './index.css'; // Make sure this file exists and is loaded correctly
import App from './App'; // Ensure App.js exports a valid component
import reportWebVitals from './reportWebVitals'; // Optional performance tracking

const root = ReactDOM.createRoot(document.getElementById('root')); // Getting the root element
root.render(
  <React.StrictMode>
    <App /> {/* Rendering the App component */}
  </React.StrictMode>
);

reportWebVitals(); // Optional: for measuring performance
