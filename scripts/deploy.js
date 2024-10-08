const hre = require("hardhat");

async function main() {
  const ZendeskNFT = await hre.ethers.getContractFactory("ZendeskNFT");
  const zendeskNFT = await ZendeskNFT.deploy();
  await zendeskNFT.deployed();
  console.log("ZendeskNFT deployed to:", zendeskNFT.address);

  const UserAuth = await hre.ethers.getContractFactory("UserAuth");
  const userAuth = await UserAuth.deploy();
  await userAuth.deployed();
  console.log("UserAuth deployed to:", userAuth.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });