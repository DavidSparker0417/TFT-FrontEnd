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

// components
import React from "react";
import { Container } from "@mui/material";

import AboutUs from "./sections/AboutUs.js";
import Team from "./sections/Team.js";
import DefNavBar from "pages/components/DefNavBar";

// import Footer from "./sections/Footer.js";
import WhitePaper from "./sections/WhitePaper.js";
export default function AboutPage() {
  return (
    <>
      <DefNavBar />
      <Container>
        <AboutUs />
        <Team />
        <WhitePaper />
      </Container>
    </>
  )
}