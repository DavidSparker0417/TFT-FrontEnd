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

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import TFTTypography from "components/TFTTypography";

import "assets/css/keyframe.css";

export const StyledBox = styled(Box)({
  // marginTop: "-16px",
  width: "100%",
  display: "grid",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  transition: "all 300ms linear",

  "&:before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "16px",
    background: "linear-gradient(360deg,transparent,rgba(0,26,47,1))",
  },

  "&:after": {
    content: '""',
    position: "absolute",
    bottom: "-2px",
    left: 0,
    width: "101%",
    height: "20%",
    background: "linear-gradient(180deg,transparent,rgba(0,26,47,1))",
  },
});

export const StyledGrid = styled(Grid)({
  justifyContent: "flex-start",
  alignItems: "center",
  position: "absolute",
  zIndex: 1,
  bottom: "20%",
  left: "30px",
});

export const SliderBox = styled(Box)({
  position: "relative",
  width: "100%",
  height: "64px",
  margin: "auto",
  background: "transparent",
  overflow: "hidden",
});

export const SliderText1 = styled(TFTTypography)({
  // position: "absolute",
  display: "inline-block",
  // width: "fit-content",
  fontStyle: "italic",
  letterSpacing: "1.25px",
  whiteSpace: "nowrap",
  WebkitAnimation: "continuous-loop1 60s linear infinite",
  animation: "continuous-loop1 60s linear infinite",
});

export const SliderText2 = styled(TFTTypography)({
  // position: "absolute",
  display: "inline-block",
  fontStyle: "italic",
  letterSpacing: "1.25px",
  // width: "fit-content",
  // whiteSpace: "nowrap",
  WebkitAnimation: "continuous-loop2 60s linear infinite",
  animation: "continuous-loop2 60s linear infinite",
  animationDelay: "30s",
});
