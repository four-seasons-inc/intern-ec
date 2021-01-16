import Link from 'next/link'
import Layout from '../layouts/Layout'

const Home = () => (
  <Layout title="Product | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>This is the Sample EC site</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default Home
