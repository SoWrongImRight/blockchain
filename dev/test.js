const Blockchain = require('./blockchain');

const testcoin = new Blockchain();

testcoin.createNewBlock(2389, 'adfsdfa', 'adasdfsaf');
testcoin.createNewBlock(65465, 'adadfafsdfa', 'adaadfasdfsdfsaf');
testcoin.createNewBlock(16546, 'aadfdasdfsdfa', 'aaddfasdfasdfsaf');

console.log(testcoin);
