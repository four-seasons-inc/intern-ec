import { NextSeo } from 'next-seo'
import Link from 'next/link'
import Layout from '@components/Templates/Layout'

const AboutPage = () => (
  <Layout>
    <NextSeo
      title="About"
      description="About description goes hear"
      openGraph={{
        type: 'website',
        title: "About",
        description: "About",
      }}
    />
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default AboutPage
