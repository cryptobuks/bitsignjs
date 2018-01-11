# Bitsignjs

  Client side library for [bitsign](http://www.bitsign.io).

## Usage
```
  const bitsignjs = require('bitsignjs');
  
  let api = bitsignjs.init(<your_token>);
```

## APIS

### contracts
* api.contracts.deploy
* api.contracts.send
* api.contracts.call
* api.contracts.docs
* api.contracts.deployed

### eth
* api.eth.status

### transactions
* api.transactions.notarizeTx

## sendRawTx
