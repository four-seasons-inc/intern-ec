namespace NodeJS {
  interface ProcessEnv {
    readonly SHOPIFY_DOMAIN: string;
    readonly STORE_FRONT_ACCESS_TOKEN: string;
  }
}

namespace ShopifyBuy {
  interface Cart {
    readonly webUrl: string;
  }
}
