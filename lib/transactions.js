const fetch = require('node-fetch');
const utils = require('./utils');

module.exports = (token, url) => ({
  sendTx: body => fetch(`${url}/eth/sendtx`, utils.formatBody(body, token, 'POST')).then(res => res.json()),

  notarizeTx: body => fetch(`${url}/eth/notarizetx`, utils.formatBody(body, token, 'POST')).then(res => res.json())
});
