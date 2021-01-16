import { Product } from "shopify-buy"
import { GetStaticProps } from "next"
import { client } from "../../lib/shopifyClient"
import Layout from "../../layouts/Layout"
import Link from "next/link";

type IndexProps = {
  products: Product[];
};

const IndexPage: React.FC<IndexProps> = ({ products }) => {
  return (
    <Layout title="Top">
      <h1>Hello Next.js 👋</h1>
      <ul>
        {
          products.map((product) =>
            <li key={product.id}>
              <Link href="/products/[id]" as={`/products/${product.id}`}>
                <a>
                  {product.title}
                  <img src={product.images[0].src} height={80} />
                </a>
              </Link>
            </li>)
        }
      </ul>
    </Layout>
  );
}
export default IndexPage

export const getStaticProps: GetStaticProps = async () => {
  const products: any = await client.product.fetchAll();
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
};
