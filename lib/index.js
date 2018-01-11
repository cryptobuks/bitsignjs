const _ = require('lodash');
const contracts = require('./contracts');
const eth = require('./eth');
const transactions = require('./transactions');
const config = require('./config');

module.exports = token => {
  if (_.isEmpty(token))
    throw new Error('Please provide a valid token.');

  return {
    contracts: contracts(token, config.URL),
    eth: eth(token, config.URL),
    transactions: transactions(token, config.URL)
  };
}
