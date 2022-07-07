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

import React from "react";
import PropTypes from "prop-types";

import { initWeb3Onboard } from "./multiWallets";
import { useConnectWallet, useWallets, useSetChain } from "@web3-onboard/react";
import { TARGET_NET } from "constants";

export const Web3Context = React.createContext();

export const Web3ContextProvider = ({ children }) => {
  const [{ wallet }, connect, disconnect] = useConnectWallet();
  const connectedWallets = useWallets();
  const [web3Onboard, setWeb3Onboard] = React.useState(null);
  const [chainId, setChainId] = React.useState(TARGET_NET.id);
  const [, setChain] = useSetChain();

  React.useEffect(() => {
    setWeb3Onboard(initWeb3Onboard);
  }, []);

  React.useEffect(() => {
    if (!chainId)
      return;
    setChain({ chainId });
  }, [chainId]);

  React.useEffect(() => {
    if (!connectedWallets.length)
      return;

    const connectedWalletsLabelArray = connectedWallets.map((
      { label }) => label
    );

    window.localStorage.setItem(
      "connectedWallets",
      JSON.stringify(connectedWalletsLabelArray)
    );

    // Check for Magic Wallet user session
    // if (connectedWalletsLabelArray.includes("Magic Wallet")) {
    //   const [magicWalletProvider] = connectedWallets.filter(
    //     provider => provider.label === "Magic Wallet"
    //   );
    //   const setMagicUser = async function () {
    //     const { email } =
    //       await magicWalletProvider.instance.user.getMetadata();
    //     const magicUserEmail = localStorage.getItem("magicUserEmail");
    //     if (!magicUserEmail || magicUserEmail !== email)
    //       localStorage.setItem("magicUserEmail", email);
    //   }
    //   setMagicUser();
    // }
  }, [connectedWallets, wallet]);

  React.useEffect(() => {
    const previouslyConnectedWallets = JSON.parse(
      window.localStorage.getItem("connectedWallets")
    );

    if (previouslyConnectedWallets?.length) {
      connect({ autoSelect: previouslyConnectedWallets[0] });
    }
  }, [web3Onboard, connect]);

  function disconnectWallet() {
    disconnect(wallet);
    window.localStorage.removeItem("connectedWallets");
  }

  return (
    <Web3Context.Provider
      value={{
        provider: wallet?.provider,
        account: wallet?.accounts[0]?.address,
        connectedWallets,
        connectWallet: connect,
        disconnectWallet: disconnectWallet,
        setChainId,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
}

export const useWeb3Context = () => {
  const web3Context = React.useContext(Web3Context);
  return web3Context;
}

Web3ContextProvider.defaultProps = {
  children: undefined
};

Web3ContextProvider.propTypes = {
  children: PropTypes.node
};
