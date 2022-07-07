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

import { init } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";
import trezorModule from "@web3-onboard/trezor";
import ledgerModule from "@web3-onboard/ledger";
import walletConnectModule from "@web3-onboard/walletconnect";
import coinbaseModule from "@web3-onboard/coinbase";
import portisModule from "@web3-onboard/portis";
// import magicModule from "@web3-onboard/magic";
import fortmaticModule from "@web3-onboard/fortmatic";
import torusModule from "@web3-onboard/torus";
import gnosisModule from "@web3-onboard/gnosis";

import { NETWORKS } from "constants";

import TFTIcon from "assets/images/logo.png";

const injected = injectedModule();
const coinbase = coinbaseModule();
const walletConnect = walletConnectModule();

const portis = portisModule({
  apiKey: "b2b7586f-2b1e-4c30-a7fb-c2d1533b153b"
});

const fortmatic = fortmaticModule({
  apiKey: "pk_test_886ADCAB855632AA"
});

const torus = torusModule();
const ledger = ledgerModule();

const gnosis = gnosisModule();

const trezorOptions = {
  email: "test@test.com",
  appUrl: "https://www.blocknative.com"
};

const trezor = trezorModule(trezorOptions);

// const magic = magicModule({
//   // Example api key, may need to be updated when max hits reached
//   // Get one to test with for free from https://magic.link/
//   apiKey: "pk_live_02207D744E81C2BA",
//   userEmail: localStorage.getItem("magicUserEmail")
// });

export const initWeb3Onboard = init({
  wallets: [
    injected,
    ledger,
    coinbase,
    trezor,
    walletConnect,
    gnosis,
    // magic,
    fortmatic,
    portis,
    torus
  ],
  chains: [
    NETWORKS.ethereum,
    NETWORKS.ropsten,
    NETWORKS.rinkeby,
    NETWORKS.bsc,
    NETWORKS.bsc_testnet,
    NETWORKS.polygon,
    NETWORKS.fantom,
    NETWORKS.fuji,
    NETWORKS.avalanche,
    NETWORKS.iota,
    NETWORKS.mumbai,
  ],
  appMetadata: {
    name: "TFT Multi-Wallet",
    icon: TFTIcon,
    description: "TFT Multiple Wallet",
    recommendedInjectedWallets: [
      { name: "Coinbase", url: "https://wallet.coinbase.com/" },
      { name: "MetaMask", url: "https://metamask.io" }
    ],
    agreement: {
      version: "1.0.0",
      termsUrl: "https://www.blocknative.com/terms-conditions",
      privacyUrl: "https://www.blocknative.com/privacy-policy"
    },
    gettingStartedGuide: "https://blocknative.com",
    explore: "https://blocknative.com"
  },
  accountCenter: {
    desktop: {
      enabled: false,
    },
  },
  i18n: {
    en: {
      connect: {
        selectingWallet: {
          header: "Available Wallets",
          sidebar: {
            heading: "The Fans Together",
            subheading: "Connect your wallet",
            paragraph: "Connecting your wallet is like “logging in” to Web3. Select your wallet from the options to get started.",
          },
        },
        agreement: {
          agree: "I agree to the",
          terms: "Terms & Conditions",
          and: "and",
          privacy: "Privacy Policy",
        },
      },
    },
  },
});

