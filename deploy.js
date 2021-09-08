const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'fire ghost payment virtual chunk lion maid build garment drama antique vintage',
    'https://ropsten.infura.io/v3/d2150f7429e647c08ebab549103a9309'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: '0x' + bytecode})
        .send({gas: '1000000', from: accounts[0] });

    console.log(interface)
    console.log('Contract deployed to', result.options.address);
};

deploy();

/* C:\Users\Femi\Documents\lottery4>node deploy.js
Attempting to deploy from account 0x7b3807A23eBB46cD2eBB8c36A01494D8d185432C
[{"constant":true,"inputs":[],"name":"manager","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pickWinner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getPlayers","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"enter","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"players","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]
Contract deployed to 0x5a01c07e7d4b91A22d145A390cdEb222e499Fd9d */