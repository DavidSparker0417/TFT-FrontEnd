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

import { Container, styled } from "@mui/material";
import breakpoints from "assets/theme/base/breakpoints";
const {
  values: { xs, lg},
} = breakpoints;
const XS = `@media (min-width: ${xs}px)`;
const LG = `@media (min-width: ${lg}px)`;

export const DonateContainer = styled(Container)(({bkimage}) => ({
  position: "relative",
  background: `linear-gradient(270deg, rgba(0,26,47,.4), rgba(0,26,47,.4) 80%), url(${bkimage})`,
  backgroundSize: 'cover',
  [XS] : {
    height: "400px"
  },
  [LG] :{
    height: "600px",
  },
  marginTop: "2rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  "&:before" : {
    content: "''",
    position: "absolute",
    left: "0",
    top: "0",
    width: "100%",
    height: "20%",
    background: "linear-gradient(360deg, transparent, #001a2f 80%)"
  },
  "&:after" : {
    content: "''",
    position: "absolute",
    right: 0,
    width: "40%",
    height: "0",
    borderRadius: "10px%",
    opacity: "0.9",
    background: "linear-gradient(90deg, transparent, #001a2f 80%)",
    // boxShadow: "0px 0px 5px 5px #001a2f, inset 0px 0px 5px 5px #001a2f"
  }
}));
