const request = require('superagent'); // eslint-disable-line
const conf = require('../src/config'); // eslint-disable-line

function casProxy() {
  return (req, res, next) => {
    if (req.headers.accept.indexOf("html") !== -1
      && !req.cookies['csrf']) {
      const promise = new Promise(resolve => {
        const r = request(conf.api.origin);
        r.end((err, response) => {
          resolve(response);
        });
      });
      promise.then(response => {
        Object.keys(response.headers).map(header => {
          res.append(header, response.headers[header]);
        });
        next();
      });
    } else if (req.headers.accept.indexOf("html") !== -1
      && req.query.ticket && req.query.service
      && !req.cookies['ring-session']) {
      const promise = new Promise(resolve => {
        const r = request.get(conf.api.origin)
          .query({ 'ticket': req.query.ticket })
          .query({ 'service': req.query.service })
          .set(req.headers);
        r.end((err, response) => resolve(response));
      });
      promise.then(response => {
        Object.keys(response.headers).map(header => {
          res.append(header, response.headers[header]);
        });
        next();
      });
    } else {
      next();
    }
  };
}

module.exports = casProxy;
