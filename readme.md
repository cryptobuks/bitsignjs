# Bitsignjs
  Client side library for [bitsign](http://www.bitsign.io). For further information please go to the [documentation](https://bitsign.docs.apiary.io).

## APIS
First of all you must instanciate the api with your token:
```
  const bitsignjs = require('bitsignjs');

  let api = bitsignjs.init(<your_token>);
```

### contracts
* api.contracts.deploy

```
  api.contracts.deploy({
    password: '<your_password>',
    type: '<type>',
    args: {}
  }).then(data => console.log(data))
```

* api.contracts.send

```
  api.contracts.send({
    password: '<your_password>',
    method: '<method>',
    args: {},
    address: '<contract_address>'
  }).then(data => console.log(data))
```

* api.contracts.call

```
  api.contracts.call({
    password: '<your_password>',
    method: '<method>',
    args: {},
    address: '<contract_address>'
  }).then(data => console.log(data))
```

* api.contracts.docs

```
  api.contracts.docs(<type>).then(data => console.log(data))
```

* api.contracts.deployed

```
  api.contracts.deployed().then(data => console.log(data))
```

### eth
* api.eth.status

```
  api.eth.status().then(data => console.log(data))
```

### transactions
* api.transactions.notarizeTx

```
  api.transactions.notarizeTx({
    address: '0x...',
    data: '<data>',
    password: '<your_password>'
  }).then(data => console.log(data))
```

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
