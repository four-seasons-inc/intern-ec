import { Product } from "shopify-buy"
import { GetStaticProps } from "next"
import { client } from "@lib/shopifyClient"
import Layout from "@components/Templates/Layout"
import Link from "next/link"
import { NextSeo } from 'next-seo'

type IndexProps = {
  products: Product[];
};

const IndexPage: React.FC<IndexProps> = ({ products }) => {
  return (
    <Layout>
      <NextSeo
        title="Products"
        description="Products description goes hear"
        openGraph={{
          type: 'website',
          title: "Products",
          description: "Products",
        }}
      />
      <div className="flex flex-wrap">
        {
          products.map((product) =>
            <div key={product.id} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
                <div className="prod-title">
                  <p className="text-2xl uppercase text-gray-900 font-bold">{product.title}</p>
                  <p className="uppercase text-sm text-gray-400">
                    Description hear
                    </p>
                </div>
                <div className="prod-img">
                  <img src={product.images[0].src}
                    className="w-full object-cover object-center" />
                </div>
                <div className="prod-info grid gap-10 mt-4">
                  <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                    <p className="font-bold text-xl">{product.variants[0].price}円</p>
                    <Link href="/products/[id]" as={`/products/${product.id}`}>
                      <button
                        className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                        More Detail
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </div>
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
