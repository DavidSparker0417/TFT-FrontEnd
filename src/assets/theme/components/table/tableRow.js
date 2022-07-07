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

// TFTWebkit base styles
import borders from "assets/theme/base/borders";
import colors from "assets/theme/base/colors";

// TFTWebkit helper functions
import rgba from "assets/theme/functions/rgba";

const { borderWidth } = borders;
const { dark } = colors;

export default {
  styleOverrides: {
    root: {
      border: "none",
      "&:nth-of-type(even)": {
        backgroundColor: rgba("#436C80", 1),
      },

      "&:last-child td, &:last-child th": {
        borderBottom: `${borderWidth[1]} solid ${dark.main}`,
      },
    },
  },
};
