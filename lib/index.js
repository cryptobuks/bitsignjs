const _ = require('lodash');
const contracts = require('./contracts');
const eth = require('./eth');
const transactions = require('./transactions');

const URL = 'http://localhost:4567';

module.exports = token => {
  if (_.isEmpty(token))
    throw new Error('Please provide a valid token.');

  return {
    contracts: contracts(token, URL),
    eth: eth(token, URL),
    transactions: transactions(token, URL)
  };
}
