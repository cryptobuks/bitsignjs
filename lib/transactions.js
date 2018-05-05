const fetch = require('node-fetch');
const qs = require('querystring');
const utils = require('./utils');

module.exports = (token, url) => ({
  notarizeTx: body => fetch(`${url}/eth/notarizetx`, utils.formatBody(body, token, 'POST')).then(res => res.json()),

  executed: hash => fetch(`${url}/api/v2/transactions?${qs.stringify({token, hash})}`).then(res => res.json())
});
