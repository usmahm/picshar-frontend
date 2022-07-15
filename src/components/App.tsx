import React from 'react';
import { AppProps } from 'next/app';
import UserContextProvider from '../contexts/user/UserContext';
import Layout from './Layout/Layout';

function App({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContextProvider>
  );
}

export default App;
