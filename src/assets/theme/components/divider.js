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

import colors from "assets/theme/base/colors";

import rgba from "assets/theme/functions/rgba";
import pxToRem from "assets/theme/functions/pxToRem";

const { dark, white } = colors;

export default {
  styleOverrides: {
    root: {
      background: rgba(white.main, 0.2),
      height: pxToRem(1),
      margin: `${pxToRem(16)} 0`,
      borderBottom: "none",
      opacity: 0.25,
    },

    vertical: {
      background: rgba(dark.main, 0.2),
      width: pxToRem(1),
      height: "100%",
      margin: `0 ${pxToRem(16)}`,
      borderRight: "none",
    },

    light: {
      background: rgba(white.main, 0.2),

      "&.MuiDivider-vertical": {
        background: rgba(white.main, 0.2),
      },
    },
  },
};
