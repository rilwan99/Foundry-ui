// Constants
export const DEPLOYMENT_CONTRACT_ADDRESS =
  "0xaf9a5001b36fdB26B67ae005a0c2f3b9e6000307";
export const DEPLOYMENT_CONTRACT_ABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_target",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_functionName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_arguments",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_blockNumber",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "arguments",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "blockNumber",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "functionName",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "invokeCall",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "target",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];