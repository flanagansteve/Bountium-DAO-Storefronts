const Web3 = require("web3");
const { ethereumURL } = require("../config")

const web3 = new Web3(ethereumURL);

module.exports = web3;
