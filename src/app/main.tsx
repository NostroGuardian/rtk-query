import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';

import { HomePage } from '@/pages/Home';

import { Provider as ChakraProvider } from './chakra/provider';
import './globals.css';
import store from './store';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <ChakraProvider>
        <HomePage />
      </ChakraProvider>
    </ReduxProvider>
  </StrictMode>
);
