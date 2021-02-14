import Link from 'next/link'
import Layout from '../../components/Templates/Layout'

const ContactPage = () => (
  <Layout title="Contact | Sample e-commerce">
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
