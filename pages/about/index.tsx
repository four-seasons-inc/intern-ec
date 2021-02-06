import Link from 'next/link'
import Layout from '../../layouts/Layout'

const AboutPage = () => (
  <Layout title="About | Sample e-commerce">
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
