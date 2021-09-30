const CarbonNFT = artifacts.require("./CarbonNFT.sol");
const LoansNFT = artifacts.require("./LoansNFT.sol");


module.exports = function (deployer) {
  deployer.deploy(CarbonNFT);
  deployer.deploy(LoansNFT);

};
