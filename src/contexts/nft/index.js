/**
 **************************************************************
 * The Fans Together Website - v1.0.0
 **************************************************************
 * 
 * Product Page: 
 * Copyright 2022 @TFTTeam (https://www.tft-dev-team.com)
 * 
 * Coded by DavidSparker
 * 
 **************************************************************
 */

import React, { createContext, useContext } from "react";
import PropTypes from "prop-types";

const NFTList = [
  {
    Name: "#DAOPIONEER",
    Image: require("assets/images/nftshop/DAOPIONEER.webp"),
    Link: {
      internal : "/nfts",
      opensea: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/115441827200400250385634066730853623416244351598748469377315369146833510073320",
      soonaverse: "https://soonaverse.com/collection/0x38269047f4ad85fa4b46e70c597ed0265f8d556c",
    },
    Details: {
      cost: "100Mi",
      vested: "10,000 $TFT",
      bonus1: "40%",
      bonus2: "100%",
    },
  },
  {
    Name: "#TFTMOTO",
    Image: require("assets/images/nftshop/TFTMOTO.webp"),
    Link: {
      internal : "/nfts",
      opensea: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/115441827200400250385634066730853623416244351598748469377315369141335951933940",
      soonaverse: "https://soonaverse.com/collection/0x0eb4045a75dfb850c35a96e6f5018914f224062d",
    },
    Details: {
      cost: "500Mi",
      vested: "50,000 $TFT",
      bonus1: "40%",
      bonus2: "100%",
    },
  },
  {
    Name: "#TFTAIR1",
    Image: require("assets/images/nftshop/TFTAIR1.webp"),
    Link: {
      internal : "/nfts",
      opensea: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/115441827200400250385634066730853623416244351598748469377315369135838393796560",
      soonaverse: "https://soonaverse.com/collection/0x44e2a9319e528614ceceae638e743dcbb98682bb",
    },
    Details: {
      cost: "10Mi",
      vested: "1,000 $TFT",
      bonus1: "40%",
      bonus2: "100%",
    },
  },
  {
    Name: "#TFTOON1",
    Image: require("assets/images/nftshop/TFTOON1.webp"),
    Link: {
      internal : "/nfts",
      opensea: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/115441827200400250385634066730853623416244351598748469377315369138037417052612",
    },
    Details: {
      cost: "100Mi",
      vested: "10,000 $TFT",
      bonus1: "40%",
      bonus2: "100%",
    },
  },
  {
    Name: "#TFTOON2",
    Image: require("assets/images/nftshop/TFTOON2.webp"),
    Link: {
      internal : "/nfts",
      opensea: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/115441827200400250385634066730853623416244351598748469377315369145733998445044",
    },
    Details: {
      cost: "250Mi",
      vested: "25,000 $TFT",
      bonus1: "40%",
      bonus2: "100%",
    },
  },

  {
    Name: "#TFTMETAL1",
    Image: require("assets/images/nftshop/TFTMETAL1.webp"),
    Link: {
      internal : "/nfts",
      opensea: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/115441827200400250385634066730853623416244351598748469377315369142435463561716",
      soonaverse: "https://soonaverse.com/collection/0x2920bfc1892452cd7daab4b3ab507bff51732651",
    },
    Details: {
      cost: "1Gi",
      vested: "100,000 $TFT",
      bonus1: "40%",
      bonus2: "100%",
    },
  },
  {
    Name: "#TFTMETAL2",
    Image: require("assets/images/nftshop/TFTMETAL2.webp"),
    Link: {
      internal : "/nfts",
      opensea: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/115441827200400250385634066730853623416244351598748469377315369139136928678388",
      soonaverse: "https://soonaverse.com/collection/0xd595b58ffd0e030c9fc0d42f53a39a57910e269c",
    },
    Details: {
      cost: "250Mi",
      vested: "25,000 $TFT",
      bonus1: "40%",
      bonus2: "100%",
    },
  },

  {
    Name: "#TFTMIDAS1",
    Image: require("assets/images/nftshop/TFTMIDAS1.webp"),
    Link: {
      internal : "/nfts",
      opensea: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/115441827200400250385634066730853623416244351598748469377315369144634486816893",
      soonaverse: "https://soonaverse.com/collection/0xe2a3c210c4a2b70c4b251eaf5d32a23765f6628d",
    },
    Details: {
      cost: "10Gi",
      vested: "1,000,000 $TFT",
      bonus1: "40%",
      bonus2: "100%",
    },
  },
  {
    Name: "#TFTMIDAS2",
    Image: require("assets/images/nftshop/TFTMIDAS2.webp"),
    Link: {
      internal : "/nfts",
      opensea: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/115441827200400250385634066730853623416244351598748469377315369143534975189117",
    },
    Details: {
      cost: "10Gi",
      vested: "1,000,000 $TFT",
      bonus1: "40%",
      bonus2: "100%",
    },
  },
];

const NftContext = createContext();
export function NftProvider({children}) {
  return(
    <NftContext.Provider value = {{list: NFTList}}>
      {children}
    </NftContext.Provider>
  )
}

export function useNft() {
  const data = useContext(NftContext);
  return data;
}

NftProvider.defaultProps = {
  children: undefined,
}

NftProvider.propTypes = {
  children: PropTypes.node
}