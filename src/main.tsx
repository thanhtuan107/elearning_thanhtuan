import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

import config from './config';
import { Provider } from 'react-redux';
import store from './store/store.tsx';
console.log('🔥 ~ config:', config);

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
