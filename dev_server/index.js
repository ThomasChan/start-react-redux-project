const cookieParser = require('cookie-parser');
const CASProxy = require('./CASProxy');

function setup(app) {
  app.use(cookieParser());
  app.use(CASProxy());
}

module.exports = setup;
