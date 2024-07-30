import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GifProvider from './context/GIFContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GifProvider>
      <App />
    </GifProvider>
);
