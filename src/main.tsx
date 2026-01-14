import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/app/app.tsx';

import './styles/reset.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
