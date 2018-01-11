const fetch = require('node-fetch');

module.exports = (token, url) => ({
  status: () => fetch(`${url}/status`).then(res => res.text())
});
