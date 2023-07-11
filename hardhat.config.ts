import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';

import dotenv from 'dotenv';
dotenv.config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const POLYGON_API_KEY = process.env.POLYGON_API_KEY;
const POLYGON_RPC_URL = process.env.POLYGON_RPC_URL;

console.log(PRIVATE_KEY, POLYGON_API_KEY, POLYGON_RPC_URL);

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.18',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {},
    polygonMainnet: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/_ULp5HCwK_YWhB3OfsvTU64A8G9A0KsY',
      account: [PRIVATE_KEY],
    },

    polygonTestnet: {
      url: POLYGON_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.POLYGON_API_KEY,
  },
};

export default config;
