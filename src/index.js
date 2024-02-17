import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ImageProvider } from './Utils/Register/MyContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <ImageProvider>
        <App />
    </ImageProvider>
  </React.StrictMode>
);

reportWebVitals();
