import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Cart, Product } from "shopify-buy";
import Layout from "../../layouts/Layout";
import { client } from "../../lib/shopifyClient"

type DetailProps = {
  product?: Product
  errors?: string
};

const DetailPage = (props: DetailProps) => {
  const { product, errors } = props;
  const [checkoutLink, setCheckoutLink] = useState("");

  if (errors) { return <p>Error: {props.errors}</p> }
  if (!product) { return <p>Error: Product not found</p> }

  useEffect(() => {
    client.checkout.create().then((checkout: Cart) => {
      const variantsId = product.variants[0].id;
      client.checkout.addLineItems(checkout.id, [{ variantId: variantsId, quantity: 1 }])
        .then((checkout) => {
          console.log(checkout.lineItems);
          setCheckoutLink(checkout.webUrl);
        });
    });
  }, []);

  return (
    <Layout title={product.title}>
      <div>
        <Link href="/products">
          <a href="/products">Back to Product Lists</a>
        </Link>
      </div>
      <div>
        <p>{product.title}</p>
        <img src={product.images[0].src} height={200} />
      </div>
      <Link href={checkoutLink}>
        <button>購入する</button>
      </Link>
    </Layout>
  )
}

export default DetailPage

export const getStaticPaths: GetStaticPaths = async () => {
  const products: Product[] = await client.product.fetchAll();
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<DetailProps> = async ({ params }) => {
  try {
    const id = params?.id;
    if (!id) {
      return { props: { errors: "not found" } };
    }
    const productRes = await client.product.fetch(id as string);
    const product = JSON.parse(JSON.stringify(productRes));
    return { props: { product: product } }
  } catch (err) {
    return { props: { errors: "unexpected error" } };
  }
}