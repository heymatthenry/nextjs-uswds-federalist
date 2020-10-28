const path = require('path');

module.exports = {
  basePath: process.env.BASEURL || '/',
  assetPrefix: process.env.BASEURL || '/',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
