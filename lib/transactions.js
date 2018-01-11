const fetch = require('node-fetch');
const utils = require('./utils');

module.exports = (token, url) => ({
  notarizeTx: body => fetch(`${url}/eth/notarizetx`, utils.formatBody(body, token, 'POST')).then(res => res.json())
});
