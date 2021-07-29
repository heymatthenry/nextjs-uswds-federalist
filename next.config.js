const path = require('path');

module.exports = {
  assetPrefix: process.env.BASEURL ? process.env.BASEURL + '/' : '/',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles'), path.join(__dirname, 'node_modules/uswds/dist/scss')],
    // prependData: `$baseUrl: '${process.env.BASEURL || "/"}'`,
  },
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader?limit=100000' 
      }
    )
    return config
  }
}
