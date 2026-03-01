require("dotenv").config();
const hre = require("hardhat");

async function main() {
  const tokenName = process.env.TOKEN_NAME || "Task2 Token";
  const tokenSymbol = process.env.TOKEN_SYMBOL || "T2T";
  const initialSupplyTokens = process.env.INITIAL_SUPPLY || "1000000";
  const initialSupply = hre.ethers.parseUnits(initialSupplyTokens, 18);

  const [deployer] = await hre.ethers.getSigners();

  if (!deployer) {
    throw new Error("No deployer account found. Check PRIVATE_KEY in .env.");
  }

  console.log(`Network: ${hre.network.name}`);
  console.log(`Deployer: ${deployer.address}`);
  console.log(`Token Name: ${tokenName}`);
  console.log(`Token Symbol: ${tokenSymbol}`);
  console.log(`Initial Supply: ${initialSupplyTokens}`);

  const token = await hre.ethers.deployContract("CustomERC20", [
    tokenName,
    tokenSymbol,
    initialSupply,
    deployer.address,
  ]);
  await token.waitForDeployment();

  const tokenAddress = await token.getAddress();
  const deploymentTx = token.deploymentTransaction();

  console.log("Deployment completed.");
  console.log(`Token Contract Address: ${tokenAddress}`);
  if (deploymentTx) {
    console.log(`Deployment Tx Hash: ${deploymentTx.hash}`);
  }

  if (hre.network.name === "sepolia") {
    if (deploymentTx) {
      console.log(`Etherscan Tx: https://sepolia.etherscan.io/tx/${deploymentTx.hash}`);
    }
    console.log(`Etherscan Contract: https://sepolia.etherscan.io/address/${tokenAddress}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
