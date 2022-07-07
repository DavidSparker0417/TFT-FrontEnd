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
// import { Link } from "react-router-dom";
import MuiLink from "@mui/material/Link";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import TFTBox from "components/TFTBox";

// import iconMetamask from "assets/images/metamask.svg";
import iconOpeanSea from "assets/images/symbol/social/opensea.svg";
import iconSoonaverse from "assets/images/symbol/social/soonaverse.svg";
import iconInstagram from "assets/images/symbol/social/instagram.svg";
import iconDiscord from "assets/images/symbol/social/discord.svg";
import iconTwitter from "assets/images/symbol/social/twitter.svg";


const socials = [
  // {
  //   url: "/",
  //   img: iconMetamask,
  // },
  {
    url: "https://soonaverse.com/space/0x3e161347e69f572e422d4cef556631532cc973d9/overview",
    img: iconSoonaverse,
  },
  {
    url: "https://opensea.io/collection/thefanstogether",
    img: iconOpeanSea,
  },
  {
    url: "https://instagram.com/thefanstogether",
    img: iconInstagram,
  },
  {
    url: "https://discord.gg/jHFCY2aGsv",
    img: iconDiscord,
  },
  {
    url: "https://twitter.com/TheFansTogether",
    img: iconTwitter,
  },
]

export default function TFTSocialGroup({width, height, ...rest}) {
  return (
    <Grid item container width="fit-content" sx={{ alignItems: "center" }}>
      {
        socials.map((s, i) => (
          <TFTBox
            mr={1}
            key={i}
            component={MuiLink}
            href={s.url}
            rel="noreferrer"
            target="_blank"
            sx={{
              background: `url(${s.img}) no-repeat`,
              backgroundSize: "contain",
              width: {width},
              height: {height},
            }}
            {...rest}
            />            
        ))
      }
    </Grid>
  )
}

TFTSocialGroup.defaultProps = {
  width: "35px",
  height: "35px",
};

TFTSocialGroup.propTypes = {
  width: PropTypes.any,
  height: PropTypes.any,
};
