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

// TFTWebkit helper functions
import pxToRem from "assets/theme/functions/pxToRem";

export default {
  styleOverrides: {
    root: {
      padding: `${pxToRem(8)} ${pxToRem(16)}`,
      border: "none",
    },
    body: {
      fontSize: `${pxToRem(14)}`,
    },
  },
};
