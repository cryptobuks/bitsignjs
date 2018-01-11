const fetch = require('node-fetch');
const qs = require('querystring');
const utils = require('./utils');

module.exports = (token, url) => ({
  deploy: body => fetch(`${url}/eth/contract`, utils.formatBody(body, token, 'PUT')).then(res => res.json()),

  send: body => fetch(`${url}/eth/contract`, utils.formatBody(body, token, 'PATCH')).then(res => res.json()),

  call: body => fetch(`${url}/eth/contract`, utils.formatBody(body, token, 'POST')).then(res => res.json()),

  docs: type => fetch(`${url}/eth/contract/doc?${qs.stringify({token, type})}`).then(res => res.json()),

  deployed: () => fetch(`${url}/api/v2/contracts?${qs.stringify({token})}`).then(res => res.json())
});
