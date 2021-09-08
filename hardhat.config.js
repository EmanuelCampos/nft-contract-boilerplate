require("@nomiclabs/hardhat-waffle");
const fs = require("fs")

const privateKey = fs.readFileSync(".secret").toString()
const projectId =


module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    },
  },
  solidity: "0.8.4",
};
