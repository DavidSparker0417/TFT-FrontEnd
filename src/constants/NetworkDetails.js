/**
 **************************************************************
 * The Fans Together Website - v1.0.0
 **************************************************************
 *
 * Product Page:
 * Copyright 2022 @TFTTeam (https://www.tft-dev-team.com)
 *
 * Coded by Telecrypto@OKI
 *
 **************************************************************
 */

// Replace with your DApp"s Infura ID
const INFURA_ID = "cea9deb6467748b0b81b920b005c10c1";

// Network ID constants
export const NETWORKS = {
  ethereum: {
    id: "0x1",
    token: "ETH",
    label: "Ethereum",
    rpcUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`
  },
  ropsten: {
    id: "0x3",
    token: "tROP",
    label: "Ropsten",
    rpcUrl: `https://ropsten.infura.io/v3/${INFURA_ID}`
  },
  rinkeby: {
    id: "0x4",
    token: "rETH",
    label: "Rinkeby",
    rpcUrl: `https://rinkeby.infura.io/v3/${INFURA_ID}`
  },
  bsc: {
    id: "0x38",
    token: "BNB",
    label: "Binance",
    rpcUrl: "https://bsc-dataseed.binance.org/"
  },
  bsc_testnet: {
    id: "0x61",
    token: "BNB",
    label: "Binance Testnet",
    rpcUrl: "https://data-seed-prebsc-1-s1.binance.org:8545/"
  },
  polygon: {
    id: "0x89",
    token: "MATIC",
    label: "Polygon",
    rpcUrl: "https://matic-mainnet.chainstacklabs.com"
  },
  fantom: {
    id: "0xfa",
    token: "FTM",
    label: "Fantom",
    rpcUrl: "https://rpc.ftm.tools/"
  },
  iota: {
    id: "0x432",
    token: "MIOTA",
    label: "IOTA EVM",
    rpcUrl: "https://evm.wasp.sc.iota.org",
  },
  fuji: {
    id: "0xa869",
    token: "AVAX",
    label: "Avalanche Testnet",
    rpcUrl: "https://api.avax-test.network/ext/bc/C/rpc"
  },
  avalanche: {
    id: "0xa86a",
    token: "AVAX",
    label: "Avalanche",
    rpcUrl: "https://api.avax.network/ext/bc/C/rpc"
  },
  mumbai: {
    id: "0x13881",
    token: "MATIC",
    label: "Mumbai",
    rpcUrl: "https://matic-mumbai.chainstacklabs.com",
  },
};

export const Addresses = {
  [NETWORKS.bsc_testnet.id]: {
    DAO_NFT: "0x33d5ED4CB4f191117E21D8a17BC455B83801dE35",
    DAO_TOKENID: "0x27e0C3c11F2184C323d8c16129b3A26CC5c7b3820000000000000D00000003E8",
    CLAIMER: "0xd41E707c8fBdD44401Ac2C8447fef0021a60FfFe",
  },
  [NETWORKS.iota.id]: {
    AIRDROP: "0x8DB6B5e521CBa4888E88c182b865b2833cEC6D43",
  },
  [NETWORKS.fuji.id]: {
    DAO_NFT: "0xd83d2138653e0dd6711D9b577e658c0bC2C902a7",
    DAO_TOKENID: "0x27e0C3c11F2184C323d8c16129b3A26CC5c7b3820000000000000D00000003E8",
    CLAIMER: "0x2D8db5CF910bCF176a2A4213B66cB91d29Db6E91",
  },
  [NETWORKS.rinkeby.id]: {
    DAO_NFT: "0x100A11078BB51A72285798002C3936013211BfC8",
    DAO_TOKENID: "0x27e0C3c11F2184C323d8c16129b3A26CC5c7b3820000000000000D00000003E8",
    CLAIMER: "0x151D15aC8bEa0FD9776EEDcb43d59fd876986BE6",
  },
  [NETWORKS.mumbai.id]: {
    DAO_NFT: "0x2ca1C15a2a4fa763ee555d8048CbBb3b3327B246",
    DAO_TOKENID: "0x27e0C3c11F2184C323d8c16129b3A26CC5c7b3820000000000000D00000003E8",
    CLAIMER: "0x3133a2eA8fB01DEBad0B9ed51D5966D260e5dd63",
  },
  [NETWORKS.polygon.id]: {
    DAO_NFT: "0x2953399124f0cbb46d2cbacd8a89cf0599974963",
    DAO_TOKENID: "0xFF39C23AFBB26314E12C43A191DE16213F064B4D0000000000000D00000003E8",
    CLAIMER: "0x308cd47d5b202ebee13133fde4366f134b490434",
  },
};

// Target network chain
export const TARGET_NET = NETWORKS.iota;
export const CLAIM_NET = NETWORKS.polygon;
