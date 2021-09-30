const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = process.env.MNEMONIC;
//const privateKeyTest = '<ADD-YOUR-PRIVATE-KEY-HERE>';

module.exports = {

  networks: {
    Htestnet: {
      provider: () => {
        return new HDWalletProvider({
          mnemonic,
          providerOrUrl: 'https://api.s0.b.hmny.io', // https://api.s0.t.hmny.io for mainnet
          derivationPath: `m/44'/1023'/0'/0/`
        });
      },
      network_id: 1666700000, // 1666600000 for mainnet
    },
    Hmainnet: {
      provider: () => {
        return new HDWalletProvider({
          mnemonic,
          providerOrUrl: 'https://api.s0.t.hmny.io', // https://api.s0.t.hmny.io for mainnet
          derivationPath: `m/44'/1023'/0'/0/`
        });
      },
      network_id: 1666600000, // 1666600000 for mainnet
    }
  },
  compilers: {
    solc: {
      version: ">=0.6.0 <0.7.0",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
