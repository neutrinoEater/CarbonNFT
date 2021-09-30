require("@nomiclabs/hardhat-waffle");
require('hardhat-deploy');

// Replace this private key with your Harmony account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
const HARMONY_PRIVATE_KEY = process.env.HPK;
const Mnemonic = process.env.MNEMONIC; // one1v4hngufcqk787dz50vq2nvukgv28zzhch547y5

module.exports = {
  solidity: "0.6.3",
  networks: {
    testnet: {
      url: `https://api.s0.b.hmny.io`,
      accounts: [`0x${HARMONY_PRIVATE_KEY}`],
      //accounts: {mnemonic: `${Mnemonic}`}
      //accounts: {`mnemonic`:Mnemonic}
    },
    mainnet: {
      url: `https://api.harmony.one`,
      accounts: [`0x${HARMONY_PRIVATE_KEY}`],
      //accounts: {mnemonic: `${Mnemonic}`}
      //accounts: {`mnemonic`:Mnemonic}
    }
  }
};
