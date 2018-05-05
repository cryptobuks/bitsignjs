# Bitsignjs

![Bitsign](https://bitsign.io/img/logos/logo.png "Bitsign Logo")

Library for [bitsign](http://www.bitsign.io). For further information please go to the [documentation](https://bitsign.docs.apiary.io).

Bitsignjs its a library that lets you interact easily with [BitSign Federation](https://stats.bitsign.io) blockchain to create notary transactions, deploy smart contracts, make calls and ejecute state changer contracts functions.

## APIS
To begin using our library you must instanciate the library with your token. To create your access token you can click [this](https://bitsign.docs.apiary.io/#reference/0/user-endpoints/new-user) link.

```
const bitsignjs = require('bitsignjs');

let api = bitsignjs.init(<your_token>);
```

### Smart Contracts
To create, deploy and interact with Smart Contrat we have several methods that connect with our webservice endpoints.

If you want to deploy a new contract you can use the endpoint **deploy** as shown below. For more information you can check our official documentation [here](https://bitsign.readthedocs.io/en/latest/)
#### api.contracts.deploy

```
  api.contracts.deploy({
    password: '<your_password>',
    type: '<type>',
    args: {}
  }).then(data => console.log(data))
```

#### api.contracts.send

```
  api.contracts.send({
    password: '<your_password>',
    method: '<method>',
    args: {},
    address: '<contract_address>'
  }).then(data => console.log(data))
```

#### api.contracts.call

```
  api.contracts.call({
    password: '<your_password>',
    method: '<method>',
    args: {},
    address: '<contract_address>'
  }).then(data => console.log(data))
```

#### api.contracts.docs

```
  api.contracts.docs(<type>).then(data => console.log(data))
```

#### api.contracts.deployed

```
  api.contracts.deployed().then(data => console.log(data))
```

### eth
#### api.eth.status

```
  api.eth.status().then(data => console.log(data))
```

### transactions
#### api.transactions.notarizeTx

```
  api.transactions.notarizeTx({
    address: '0x...',
    data: '<data>',
    password: '<your_password>'
  }).then(data => console.log(data))
```

#### api.transactions.executed

```
  api.transactions.notarizeTx().then(data => console.log(data))
  api.transactions.notarizeTx('0x...').then(data => console.log(data))
```

## RawTx
In order to use create and/or send a raw tx you don't need to init the library or pass the token.

#### bitsignjs.createRawTx
You must send:
* sender: Sender address.
* privateKey: Private key of the sender address.
* to: Address of the transaction destination.
* value: Value in ethers.

```
  const bitsignjs = require('bitsignjs');

  bitsignjs.createRawTx({
    sender: '0x',
    privateKey: '...',
    to: '0x...',
    value: ''
  }).then(signedTx => console.log(signedTx))
```

#### bitsignjs.signedRawTx

```
  const bitsignjs = require('bitsignjs');

  bitsignjs.signedRawTx(signedTx).then(data => console.log(data))
```
