/**
 **************************************************************
 * The Fans Together Website - v1.0.0
 **************************************************************
 * 
 * Product Page: 
 * Copyright 2022 @TFTTeam (https://www.tft-dev-team.com)
 * 
 * Coded by Telecrypto@OKI
 * 
 **************************************************************
 */
import React from "react";
import PropTypes from "prop-types";

// mui components
import { styled } from "@mui/material";

// TFTWebkit components
import TFTBox from "components/TFTBox";

export default function TemplatePage(props) {
  const { top, height, sx, banner, children } = props;

  const Banner = styled(TFTBox)({
    position: "absolute",
    left: "0",
    top: "0",
    width: "100%",
    backgroundSize: "100%!important",
    backgroundPosition: banner.backgroundPosition ? banner.backgroundPosition : "center top !important",
    backgroundRepeat: "no-repeat!important",
    background: banner.background,

    "&:before": {
      content: '""',
      position: "absolute",
      bottom: "0",
      left: "0",
      width: "100%",
      height: banner.bottomSmooth === true ? "5%" : "0",
      background: "linear-gradient(180deg,transparent,rgba(0,26,47,1))",
    },

    "&:after": {
      content: '""',
      position: "absolute",
      top: "0",
      width: "100%",
      height: banner.topSmooth === true ? "2%" : "0",
      background: "linear-gradient(360deg,transparent,rgba(0,26,47,1))",
    },
  });

  return (
    <TFTBox
      width="100%"
      top="0"
      height={height}
      sx={{
        position: "relative!important",
        ...sx}}
    >
      <Banner
        height={banner.height}
      >
      </Banner>
      <TFTBox
        position="relative"
        left="0"
        top={top}
        width="100%"
        height="100%"
      >
        {children}
      </TFTBox>
    </TFTBox>
  );
}

TemplatePage.propTypes = {
  top: PropTypes.string.isRequired,
  height: PropTypes.any.isRequired,
  sx: PropTypes.any,
  banner: PropTypes.shape({
    background: PropTypes.string,
    height: PropTypes.any,
    topSmooth: PropTypes.bool,
    bottomSmooth: PropTypes.bool,
    backgroundPosition: PropTypes.string
  }).isRequired,
  children: PropTypes.node.isRequired,
};
