import React, { ReactNode } from 'react'
import Head from 'next/head'
import Header from "../Organisms/Header"
import Footer from "../Organisms/Footer"

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Sample e-commerce' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
    </Head>
    <Header />
    {children}
    <Footer />
  </div >
)

export default Layout
