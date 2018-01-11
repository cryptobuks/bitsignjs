const Tx = require('ethereumjs-tx');
const Web3 = require('web3');

const HOST = 'http://10.136.23.93:8646';
const HEX = 'hex';
const TX_COST = 21000;

module.exports = (rawTx) => {
  const web3 = new Web3(new Web3.providers.HttpProvider(HOST));

  let tx = new Tx(rawTx);
  let privateKeyBuffer = Buffer.from(privateKey, HEX);
  tx.sign(privateKeyBuffer);

  return web3.eth.sendSignedTransaction(`0x${tx.serialize().toString(HEX)}`);
}
