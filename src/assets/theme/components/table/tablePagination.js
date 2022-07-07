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
import rgba from "assets/theme/functions/rgba";
import pxToRem from "assets/theme/functions/pxToRem";

export default {
  styleOverrides: {
    displayedRows: {
      color: rgba("white", 0.8),
      fontSize: `${pxToRem(18)}`,
      fontWeight: "bold",
      letterSpacing: "1px",
    },
  },
};
