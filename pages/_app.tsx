import React from 'react';
import type { AppProps } from 'next/app';
import App from '../src/components/App';
import '../src/shared/global.css';

export default function MyApp(props: AppProps) {
  return <App {...props} />;
}
