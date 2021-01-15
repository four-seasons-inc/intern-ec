import Client, { Product } from "shopify-buy"
import { GetStaticProps } from "next"

type IndexProps = {
  products: Product[];
};

const client = Client.buildClient({
  domain: process.env.SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.STORE_FRONT_ACCESS_TOKEN,
  language: 'ja-JP'
})

const IndexPage: React.FC<IndexProps> = ({ products }) => {
  return (
    <>
      <h1>Hello Next.js 👋</h1>
      <ul>
        {
          products.map((product) =>
            <li key={product.id}>
              {product.title}
              <img src={product.images[0].src} height={80} />
            </li>)
        }
      </ul>
    </>
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