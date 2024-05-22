import { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"
import dotenv from "dotenv"

dotenv.config()

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    tbsc: {
      url: "https://data-seed-prebsc-1-s3.bnbchain.org:8545",
      accounts: [process.env.PRIVATE_KEY ?? ''],
      chainId: 97,
    },
    bnb: {
      url: "https://bsc-dataseed1.binance.org",
      accounts: [process.env.PRIVATE_KEY ?? ''],
      chainId: 56,
    },
    sepolia: {
      url: "https://sepolia.drpc.org",
      accounts: [process.env.PRIVATE_KEY ?? ''],
      chainId: 11155111
    }
  },
  etherscan: {
    apiKey: {
      sepolia: process.env.ETH_API_KEY ?? '',
      bnb: process.env.BSC_API_KEY ?? '',
      tbsc: process.env.BSC_API_KEY ?? '',
    }
  }
}

export default config
