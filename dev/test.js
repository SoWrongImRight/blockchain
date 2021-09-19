const Blockchain = require('./blockchain');

const testcoin = new Blockchain();

const previouseBlockHash = 'adfadfasfda';
const currentBlockData = [
  {
    amount: 1,
    sender: 'bob',
    recipient: 'tom',
  },
  {
    amount: 10,
    sender: 'bob',
    recipient: 'tom',
  },
  {
    amount: 100,
    sender: 'bob',
    recipient: 'tom',
  },
];

console.log(testcoin.hashBlock(previouseBlockHash, currentBlockData, 18606));
