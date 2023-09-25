require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy")
require("hardhat-gas-reporter")
require("hardhat-contract-sizer")



const sepoliaUrl = "https://eth-sepolia.g.alchemy.com/v2/aY4A_HeY-ILaTfkvSm8P4Kh2gNxayqBG"
const private_key = "775cd8975793d82ccf791f2db36a565f4861ad83a806519dea4823a4ccd69486"
const apiToken = "SAK1A2G24EXI1BMZQWSJ2ETBKGNYIVMIQB"
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity:{
    compilers:[{
      version:"0.8.20"
    },
    {version:"0.6.6"}],
  },
  networks:{
    hardhat:{
      forking:{
        enabled:true,
        url:"https://eth-mainnet.alchemyapi.io/v2/nM7uxvX_epbZ2vO4ua-goYngrPh9QQRh"
      },
      chainId:1
    }
  },
  mocha:{
    timeout:200000,
  },
  gasReporter:{
    currency:"INR",
    enabled:true,
    outputFile:"gas-reporter.txt",
    coinmarketcap:"124811db-7253-428b-805d-1e71ad3d9337",
    token:"MATIC"
  },
  namedAccounts:{
    deployer:{
      default:3
    }
  }
};
