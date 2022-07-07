/**
 **************************************************************
 * The Fans Together Website - v1.0.0
 **************************************************************
 * 
 * Product Page: 
 * Copyright 2022 @TFTTeam (https://www.tft-dev-team.com)
 * 
 * Coded by DavidSparker, Telecrypto@OKI
 * 
 **************************************************************
 */

import React, { createContext, useCallback, useContext } from "react";
import PropTypes from "prop-types";

// context
import { useWeb3Context } from "contexts/web3/web3Context";

// web3 lib
import {
  dsWeb3GetContract,
  dsWeb3SendTransaction
} from "helpers/ds-lib/ds-web3";

// abis
import TFT_AIRDROP from "./abi/TFTAirDrop.json";
import ASSET_CONTRACT_SHARED from "./abi/AssetContractShared.json";
import TFT_CLAIMER from "./abi/Claimer.json";
import FT_CLAIMED_NFT from "./abi/DaopioneerPhys.json";

import { TARGET_NET, CLAIM_NET, Addresses } from "constants";

// constants
const TFT_AIRDROP_ABI = TFT_AIRDROP.abi;
const ASSET_CONTRACT_SHARED_ABI = ASSET_CONTRACT_SHARED.abi;
const TFT_CLAIMER_ABI = TFT_CLAIMER.abi;
const TFT_CLAIMED_NFT_ABI = FT_CLAIMED_NFT.abi;

const TFT_AIRDROP_ADDRESS = Addresses[TARGET_NET.id].AIRDROP;
const CLAIM_NET_RPC = CLAIM_NET.rpcUrl;
const TFT_DAO_NFT_ADDRESS = Addresses[CLAIM_NET.id].DAO_NFT;
const TFT_DAO_NFT_TOKENID = Addresses[CLAIM_NET.id].DAO_TOKENID;
const TFT_CLAIMER_ADDRESS = Addresses[CLAIM_NET.id].CLAIMER;

export const ContractContext = createContext();

export function ContractProvider({ children }) {
  const web3Context = useWeb3Context();

  const TFTRegisterAirdrop = useCallback(async () => {
    const contract = dsWeb3GetContract(
      web3Context.ContractProvider,
      TFT_AIRDROP_ADDRESS,
      TFT_AIRDROP_ABI
    );
    const transaction = contract.methods.register();
    return dsWeb3SendTransaction(web3Context.provider, null, web3Context.account, transaction);
  }, [web3Context.provider, web3Context.account]);

  const TFTGetClaimDetails = useCallback(async () => {
    try {
      const provider = web3Context.provider || CLAIM_NET_RPC;
      let contract = dsWeb3GetContract(provider, TFT_DAO_NFT_ADDRESS, ASSET_CONTRACT_SHARED_ABI);

      let metaUri = await contract.methods.uri(TFT_DAO_NFT_TOKENID).call();
      metaUri = metaUri.replace("0x{id}", TFT_DAO_NFT_TOKENID);
      console.log("[CLAIMER] dpn meta = ", metaUri);
      let res = await fetch(metaUri);
      let metadata = await res?.json();
      const claimableNFTDetails = metadata ? {
        name: metadata.name,
        image: metadata.image,
        animation_url: metadata.animation_url,
        description: metadata.description,
        count: web3Context.account ?
          await contract.methods.balanceOf(web3Context.account,
            TFT_DAO_NFT_TOKENID).call() : 0,
        approved: web3Context.account ?
          await contract.methods.isApprovedForAll(web3Context.account,
            TFT_CLAIMER_ADDRESS).call() : false,
      } : {};

      contract = dsWeb3GetContract(provider, TFT_CLAIMER_ADDRESS, TFT_CLAIMER_ABI);
      const claimedNFTAddr = await contract.methods.physicalDPNs(TFT_DAO_NFT_TOKENID).call();
      console.log("[CLAIMER](1) dpn claimedNFTAddr = ", claimedNFTAddr);
      contract = dsWeb3GetContract(provider, claimedNFTAddr, TFT_CLAIMED_NFT_ABI);
      metaUri = await contract.methods.uri(TFT_DAO_NFT_TOKENID).call();
      console.log("[CLAIMER](2) dpn claimedURI = ", metaUri);
      if (metaUri.indexOf("0x{id}") !== -1)
        metaUri = metaUri.replace("0x{id}", TFT_DAO_NFT_TOKENID);
      else if (metaUri.indexOf("{id}") !== -1)
        metaUri = metaUri.replace("{id}", TFT_DAO_NFT_TOKENID);
      res = await fetch(metaUri);
      metadata = await res?.json();
      console.log("[CLAIMER](3) claimed meta = ", metadata);
      const claimedNFTDetails = {
        id: TFT_DAO_NFT_TOKENID,
        name: metadata.name,
        image: metadata.image,
        animation_url: metadata?.animation_url,
        description: metadata.description,
        count: web3Context.account ?
          await contract.methods.balanceOf(web3Context.account,
            TFT_DAO_NFT_TOKENID).call() : 0,
      };

      return {
        claimableNFTs: claimableNFTDetails,
        claimedNFTs: claimedNFTDetails
      };
    } catch (e) {
      console.log("Error getting claim NFT details. err=", e.message);
    }
  }, [web3Context.provider, web3Context.account]);

  const TFTApproveToClaim = useCallback(async () => {
    try {
      const provider = web3Context.provider;
      if (!provider)
        return false;

      const contract = dsWeb3GetContract(provider, TFT_DAO_NFT_ADDRESS, ASSET_CONTRACT_SHARED_ABI);
      const transaction = contract.methods.setApprovalForAll(TFT_CLAIMER_ADDRESS, true);
      await dsWeb3SendTransaction(provider, null, web3Context.account, transaction);
      const approved = await contract.methods.isApprovedForAll(web3Context.account, TFT_CLAIMER_ADDRESS).call();
      return approved;
    } catch (e) {
      console.log("Error approve to claim. err=", e.message);
      return false;
    }
  }, [web3Context.provider, web3Context.account]);

  const TFTClaimNFT = useCallback(async () => {
    try {
      const provider = web3Context.provider;
      if (!provider)
        return false;

      const contract = dsWeb3GetContract(provider, TFT_DAO_NFT_ADDRESS, ASSET_CONTRACT_SHARED_ABI);
      const transaction = contract.methods.safeTransferFrom(
        web3Context.account, TFT_CLAIMER_ADDRESS, TFT_DAO_NFT_TOKENID, 1, "0x00");
      await dsWeb3SendTransaction(provider, null, web3Context.account, transaction);
      const remain = await contract.methods.balanceOf(web3Context.account, TFT_DAO_NFT_TOKENID).call();

      return remain;
    } catch (e) {
      console.log("Error deposit nft to claimer. err=", e.message);
      throw new Error(e.message);
      // return 0;
    }
  }, [web3Context.provider, web3Context.account]);

  return (
    <ContractContext.Provider
      value={{
        TFTRegisterAirdrop,
        TFTGetClaimDetails,
        TFTApproveToClaim,
        TFTClaimNFT,
      }}
    >
      {children}
    </ContractContext.Provider>
  )
}

export const useContract = () => {
  const contract = useContext(ContractContext);
  return contract;
}

ContractProvider.propTypes = {
  children: PropTypes.node
}