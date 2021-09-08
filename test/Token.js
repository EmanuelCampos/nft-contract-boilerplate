
const { expect } = require("chai");


// an async function.
describe("Token contract", function () {

  beforeEach(async function () {
    // Get the ContractFactory and Signers here.
    Token = await ethers.getContractFactory("Token");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    console.log(Token)

    // To deploy our contract, we just have to call Token.deploy() and await
    // for it to be deployed(), which happens onces its transaction has been
    // mined.
    hardhatToken = await Token.deploy();
    await hardhatToken.deployed();

    // We can interact with the contract by calling `hardhatToken.method()`
    await hardhatToken.deployed();
  });

  // You can nest describe calls to create subsections.
  // describe("Deployment", function () {

  //   it("Should set the right owner", async function () {
  //     console.log
  //   });

  //   it("Should assign the total supply of tokens to the owner", async function () {
  //     const ownerBalance = await hardhatToken.balanceOf(owner.address);
  //     expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  //   });
  // });
});
