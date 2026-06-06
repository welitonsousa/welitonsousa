import type { AppProps } from 'next/app';

import { Layout } from '@/components/layout';
import { ThemeProvider } from '@/components/theme-provider';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}