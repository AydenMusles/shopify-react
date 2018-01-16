const Client = require('shopify-buy')

const config = {
   storefrontAccessToken: process.env.SHOPIFY_STOREFRONT,
  domain: 'edicionuno.myshopify.com'
}
console.log(process.env.SHOPIFY_STOREFRONT)

const shopify = Client.buildClient(config)

module.exports = shopify
