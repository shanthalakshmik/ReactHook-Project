import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css'; // Import TailwindCSS
import App from './App'; // Main App component

// Create the root using createRoot (React 18)
const root = ReactDOM.createRoot(document.getElementById('root')); // Ensure this element exists in your index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
