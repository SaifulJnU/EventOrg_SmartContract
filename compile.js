const path = require('path');
const fs = require('fs');
const solc = require('solc');

const eventPath = path.resolve(__dirname, 'contracts', 'EventContract.sol');
const source = fs.readFileSync(eventPath, 'utf8');

const input = {
  language: 'Solidity',
  sources: {
    'EventContract.sol': {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*'],
      },
    },
  },
};

module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
  'EventContract.sol'
].EventContract;
