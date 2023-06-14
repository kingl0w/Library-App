import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '@fontsource/roboto/500.css';
import './styles/styles.scss';

const storedCards = localStorage.getItem('cards');
const initialCards = storedCards ? JSON.parse(storedCards) : [];

const rootElement = document.getElementById('root');

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App initialCards={initialCards} />
  </React.StrictMode>
);
