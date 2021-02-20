import 'tailwindcss/tailwind.css';

import { AppProps } from 'next/app';

import Head from '@components/Organisms/Head.tsx'

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  );
}

export default App;
