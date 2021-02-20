import Link from 'next/link'
import { NextSeo } from 'next-seo'
import Layout from '@components/Templates/Layout'

const ContactPage = () => (
  <Layout>
    <NextSeo
      title="Contact"
      description="Contact description goes hear"
      openGraph={{
        type: 'website',
        title: "Contact",
        description: "Contact",
      }}
    />
    <h1>Contact</h1>
    <p>This is the Contact page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default ContactPage
