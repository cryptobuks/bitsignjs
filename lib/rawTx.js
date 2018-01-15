const fetch = require('node-fetch');
const Tx = require('ethereumjs-tx');
const Web3 = require('web3');
const utils = require('./utils');
const config = require('./config');

const HEX = 'hex';

module.exports = {
  createRawTx: ({sender, to, value, data, privateKey}) => fetch(`${config.URL}/eth/buildTx`, utils.formatBody({sender, to, value, data}, null, 'POST'))
    .then(res => res.json())
    .then(({data}) => {
      let tx = new Tx(data);
      let privateKeyBuffer = Buffer.from(privateKey, HEX);
      tx.sign(privateKeyBuffer);

      return `0x${tx.serialize().toString(HEX)}`;
    })
    .catch(error => error.toString()),

  signedRawTx: tx => fetch(`${config.URL}/eth/signedRawTx`, utils.formatBody({tx}, null, 'POST'))
    .then(res => res.json())
    .catch(error => error.toString())
};
