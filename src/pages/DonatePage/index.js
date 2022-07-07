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

import React from "react";

import { Container } from "@mui/material";
import DonateTab from "./sections/DonateTab";
import MainFace from "./sections/MainFace";
import DefNavBar from "pages/components/DefNavBar";

export default function DonatePage() {
  return (
    <>
      <DefNavBar />
      <Container>
        <MainFace />
        <DonateTab />
      </Container>
    </>
  )
}