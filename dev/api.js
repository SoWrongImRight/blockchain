const express = require('express');
const app = express();
const Blockchain = require('./blockchain');
const { v4: uuidv4 } = require('uuid');

const nodeAddress = uuidv4().split('-').join('');

const testcoin = new Blockchain();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/blockchain', function (req, res) {
  res.send(testcoin);
});

app.post('/transaction', function (req, res) {
  const blockIndex = testcoin.createNewTransaction(
    req.body.amount,
    req.body.sender,
    req.body.recipient
  );
  res.json({ note: `Transaction will be added in block ${blockIndex}.` });
});

app.get('/mine', function (req, res) {
  const lastBlock = testcoin.getLastBlock();
  const previousBlockHash = lastBlock['hash'];
  const currentBlockData = {
    transactions: testcoin.pendingTransactions,
    index: lastBlock['index'] + 1,
  };

  const nonce = testcoin.proofOfWork(previousBlockHash, currentBlockData);

  const blockHash = testcoin.hashBlock(
    previousBlockHash,
    currentBlockData,
    nonce
  );

  testcoin.createNewTransaction(12.5, '00', nodeAddress);

  const newBlock = testcoin.createNewBlock(nonce, previousBlockHash, blockHash);
  res.json({
    note: 'New block mined successfully',
    block: newBlock,
  });
});

app.listen(3000, function () {
  console.log('Listening on port 3000.');
});
