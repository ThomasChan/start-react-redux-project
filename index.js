require('babel-polyfill'); // eslint-disable-line
require('./src'); // eslint-disable-line
if (process.env.NODE_ENV !== 'development') { // eslint-disable-line
  require('offline-plugin/runtime').install(); // eslint-disable-line
}
