var webpack = require('webpack');

module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
    externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery':'jquery'
    }),
        new webpack.DefinePlugin({
      'process.env':{
        'SHOPIFY_STOREFRONT': JSON.stringify(process.env.SHOPIFY_STOREFRONT),
      }
    })
  ],
    devServer: {
        historyApiFallback:{index:'/'},
        },
  resolve: {
    root: __dirname,
    alias: {
      Store: 'app/components/Store.jsx',
      Header: 'app/components/Header.jsx',
      StoreCard: 'app/components/StoreCard.jsx',
      Product: 'app/components/Product.jsx',
      Navigation: 'app/components/Navigation.jsx',
      Checkout: 'app/components/Checkout.jsx',
      Shopify: 'app/components/Shopify.jsx',
      GetProducts: 'data/GetProducts.jsx',
      Styles:'app/styles.scss'
          },
    extensions: ['','.js','.jsx']
  },
  module:{
    loaders: [
    {
      loader: 'babel-loader',
      query:{
        presets: ['react', 'es2015', 'stage-0']
      },
      test:/\.jsx?$/,
      exclude: /(node_modules|bower_components)/
      },
      {
       test: /\.scss$/,
       loaders: ["style", "css", "sass"]
      }
    ]
  }
};
