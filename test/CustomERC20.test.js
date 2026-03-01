const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CustomERC20", function () {
  const tokenName = "Task2 Token";
  const tokenSymbol = "T2T";
  const initialSupply = ethers.parseUnits("1000000", 18);

  async function deployToken() {
    const [owner, otherAccount] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("CustomERC20");
    const token = await Token.deploy(
      tokenName,
      tokenSymbol,
      initialSupply,
      owner.address
    );
    await token.waitForDeployment();
    return { token, owner, otherAccount, Token };
  }

  it("sets token metadata correctly", async function () {
    const { token } = await deployToken();
    expect(await token.name()).to.equal(tokenName);
    expect(await token.symbol()).to.equal(tokenSymbol);
    expect(await token.decimals()).to.equal(18);
  });

  it("mints initial supply to recipient", async function () {
    const { token, owner } = await deployToken();
    expect(await token.totalSupply()).to.equal(initialSupply);
    expect(await token.balanceOf(owner.address)).to.equal(initialSupply);
  });

  it("reverts when recipient is zero address", async function () {
    const { Token } = await deployToken();
    await expect(
      Token.deploy(tokenName, tokenSymbol, initialSupply, ethers.ZeroAddress)
    ).to.be.revertedWithCustomError(Token, "ZeroAddressRecipient");
  });
});
