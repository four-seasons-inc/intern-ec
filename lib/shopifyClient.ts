import Client from "shopify-buy";

export const client = Client.buildClient({
  domain: process.env.SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.STORE_FRONT_ACCESS_TOKEN,
  language: "ja-JP",
});
