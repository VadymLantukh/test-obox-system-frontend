import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/app/app.tsx';
import { Oval } from 'react-loader-spinner';

import './styles/reset.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense
      fallback={
        <div className="loaderWrapper">
          <Oval
            color="#d4af37"
            secondaryColor="#d4af37"
            ariaLabel="oval-loading"
          />
        </div>
      }
    >
      <App />
    </Suspense>
  </StrictMode>
);
