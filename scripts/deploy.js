// const CarbonNFT = require("../artifacts/contracts/CarbonNFT.sol/CarbonNFT.json");
// const LoansNFT = require("../artifacts/contracts/LoansNFT.sol/LoansNFT.json");
require('ethers');

async function main() {
const [deployer] = await ethers.getSigners();

const CarbonNFT = await ethers.getContractFactory("CarbonNFT");
const CarbonLending = await ethers.getContractFactory("CarbonLending");
// CarbonNFT.new.estimateGas();
// LoanNFT.new.estimateGas();
const token = await CarbonNFT.deploy();
const loaner = await CarbonLending.deploy();

console.log("Token address:", token.address);
console.log("loaner address:", loaner.address);


}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
