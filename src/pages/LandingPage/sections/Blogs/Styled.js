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

import { styled } from "@mui/material";
import TFTBox from "components/TFTBox";
import TFTTypography from "components/TFTTypography";

export const SkewBox = styled(TFTBox)({
  position: "relative",
  overflow: "hidden",
  // width: "50%",
  paddingRight: "10px",
  "&:before": {
    position: "absolute",
    content: '""',
    width: "100%",
    left: "-30%",
    height: "100%",
    backgroundColor: "#fb8c00cc",
    // opacity: "0.48",
    transformOrigin: "top right",
    transform: "skewX(-30deg)",
    zIndex: "-1"
  },
});

export const BlogTypography = styled(TFTTypography)({
  color:"#ffffffdb",
  fontStyle:"italic"
});
