import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LinkProvider } from "./useContext/linkContext"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LinkProvider>
      <App />
    </LinkProvider>
  </React.StrictMode>
);

