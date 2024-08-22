import './index.css';
import { App } from './App.tsx';
// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
const root = document.getElementById('root') as HTMLElement;

createRoot(root).render(
  // <StrictMode>
  <App />
  // </StrictMode>
);
