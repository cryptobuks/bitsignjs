const init = require('./lib/index');
const rawTx = require('./lib/rawTx');

module.exports = {
  init,
  createRawTx: rawTx.createRawTx,
  signedRawTx: rawTx.signedRawTx
};
