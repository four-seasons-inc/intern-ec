import React, { ReactNode } from 'react'
import Header from "../Organisms/Header"
import Footer from "../Organisms/Footer"

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children }: Props) => (
  <div className="container mx-auto px-6">
    <Header />
    {children}
    <Footer />
  </div>
)

export default Layout
