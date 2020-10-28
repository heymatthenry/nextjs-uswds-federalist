const path = require('path');

module.exports = {
  assetPrefix: process.env.BASEURL ? process.env.BASEURL + '/' : '/',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }
}
