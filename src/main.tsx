import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';
import { LanguageProvider } from './i18n/LanguageProvider';
import './styles/tokens.css';

const container = document.getElementById('root');
if (!container) throw new Error('#root is missing from index.html');

createRoot(container).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
);
