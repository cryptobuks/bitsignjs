# Bitsignjs

  Client side library for [bitsign](http://www.bitsign.io). For further information please go to the [documentation](https://bitsign.docs.apiary.io)

## APIS
First of all you must instanciate the api with your token:
```
  const bitsignjs = require('bitsignjs');
  
  let api = bitsignjs.init(<your_token>);
```

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
In order to use send a raw tx you don't need to init the library or pass the token, you just must send the tx:
```
  const bitsignjs = require('bitsignjs');
  
  bitsignjs.sendRawTx({
    nonce: '0x..',
    to: '0x...',
    value: '0x..',
    data: '0x..'
  });
```
