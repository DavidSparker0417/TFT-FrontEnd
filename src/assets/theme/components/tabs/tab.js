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
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";

// TFTWebkit helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { size, fontWeightRegular } = typography;
const { white } = colors;

export default {
  styleOverrides: {
    root: {
      // display: "flex",
      // flexDirection: "row",
      minHeight: "unset !important",
      fontSize: size.md,
      fontWeight: fontWeightRegular,
      textTransform: "none",
      lineHeight: "inherit",
      color: `${white.main} !important`,
      opacity: "0.5 !important",

      "& .material-icons, .material-icons-round": {
        margin: "0 !important",
        marginRight: pxToRem(6),
      },

      "& svg": {
        marginBottom: "0 !important",
        marginRight: pxToRem(6),
      },

      "&.Mui-selected": {
        opacity: "1 !important",
      },

      "& i.MuiTab-iconWrapper": {
        margin: 0,
      },
    },

    // labelIcon: {
    //   paddingTop: pxToRem(4),
    // },
  },
};
