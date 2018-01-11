const init = require('./lib/index');
const rawTx = require('./lib/rawTx');

module.exports = {
  init,
  sendRawTx: rawTx.sendRawTx,
  createRawTx: rawTx.createRawTx
};
