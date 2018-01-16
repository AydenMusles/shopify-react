const Client = require('shopify-buy')

const config = {
   storefrontAccessToken: process.env.SHOPIFY_STOREFRONT,
  domain: 'edicionuno.myshopify.com'
}

const shopify = Client.buildClient(config)

module.exports = shopify
