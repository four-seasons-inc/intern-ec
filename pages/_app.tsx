import '@assets/main.css'

import { AppProps } from 'next/app';

import Head from '@components/Organisms/Head'

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  );
}

export default App;
