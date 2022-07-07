/**
 **************************************************************
 * The Fans Together WebKit - v1.0.0
 **************************************************************
 * 
 * Product Page: 
 * Copyright 2022 @TFTTeam (https://www.tft-dev-team.com)
 * 
 * Coded by Telecrypto@OKI (https://t.me/Telecrypto20)
 * 
 **************************************************************
 */

import React from "react";
// import TFTBox from "components/TFTBox";
import Header from "./sections/Header";
import Blogs from "./sections/Blogs";
// import ShopNFT from "./sections/ShopNFT";
import PreICO from "../components/PreICO";
import Donate from "./sections/Donate";
import DefNavBar from "../components/DefNavBar";

export default function LandingPage() {
  return (
    <>
      <DefNavBar />      
      <Header />
      <Blogs />
      <PreICO />
      {/* <ShopNFT /> */}
      <Donate />
    </>
  );
}
