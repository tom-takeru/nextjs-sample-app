import '@/styles/globals.css';
import React from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import LayoutComponent from '@/components/templates/LayoutComponent';

if (process.env.NODE_ENV === 'development') {
  const MockServer = () => import('@/mocks/worker');
  MockServer();
}

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </Provider>
  );
}

export default App;
