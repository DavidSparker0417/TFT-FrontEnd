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
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// mui components
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

import TFTBox from "components/TFTBox";
import TFTTypography from "components/TFTTypography";

import suppIcon from "assets/images/nftshop/pedestal.webp";
import measIcon from "assets/images/nftshop/measure.svg";

export default function NFTBanner({ Image, Name, Route, Details, Style }) {
  const swiperBanner = Style.swiperBanner;

  const NFTBox = styled(TFTBox)({
    position: "absolute",
    bottom: "5%",
    height: "fit-content",
  });

  const NFTDetailCaption = styled(TFTTypography)({
    color: "white",
    opacity: 0.6,
    lineHeight: 1.25,
    transform: "scale(0.9, 1)",
    letterSpacing: "0",
  });

  const NFTDetailValue = styled(TFTTypography)({
    color: "white",
    opacity: 1,
    // transform: "scale(0.9, 1)",
    letterSpacing: "0",
    lineHeight: 1.25,
  });

  const NFTNameLabel = styled(TFTTypography)({
    textAlign: "right",
    fontWeight: "bold",
    lineHeight: "1",
    wordBreak: "break-all",
    letterSpacing: "0",
    transform: "scale(0.8, 1)",
  });

  return (
    <Grid container
      height={Style.bannerHeight}
      justifyContent="space-between"
      mt={3}
      sx={{
        position: "relative",
        backgroundImage: `url(${suppIcon})`,
        backgroundPosition: "center bottom",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <NFTBox
        component={Link}
        to={Route ? Route : ""}
        left={{ xs: "10%", lg: swiperBanner ? "15%" : "10%" }}
        width={{ xs: "80%", lg: swiperBanner ? "70%" : "80%" }}
      >
        <img src={Image} width="100%" />
      </NFTBox>

      <Grid item
        xs={12}
        width="100%"
        height="30%"
        position="relative"
        left={swiperBanner ? "8px" : "0"}
      >
        <Grid container
          justifyContent="space-evenly"
          spacing={swiperBanner ? 1 : 0}
          px={0}
          // paddingTop={ swiperBanner ? {xs: "2%", lg: "6%"} : "2px" }
          // paddingBottom={ swiperBanner ? {xs: "2%", lg: "6%"} : "2px" }
          height="100%"
          alignItems="baseline"
          textAlign="left"
        >
          <Grid item
            px={0}
            py={1}
            sx={{
              backgroundImage: `url(${measIcon})`,
              backgroundSize: "contain",
              backgroundPosition: "left center",
              backgroundRepeat: "no-repeat",
              paddingLeft: swiperBanner
                ? { xs: "12px!important", sm: "20px!important", md: "25px!important" }
                : { xs: "12px!important", xl: "16px!important", }
            }}
          >
            <NFTDetailCaption fontSize={Style.detailFontSize}>Cost</NFTDetailCaption>
            <NFTDetailCaption fontSize={Style.detailFontSize}>Vests</NFTDetailCaption>
            <NFTDetailCaption fontSize={Style.detailFontSize}>#Hodl bonus 6 Months </NFTDetailCaption>
            <NFTDetailCaption fontSize={Style.detailFontSize}>#Hodl bonus 12 Months </NFTDetailCaption>
          </Grid>
          <Grid item xs={swiperBanner ? 7 : 6} px={0}>
            <Grid container
              alignItems="flex-end"
              justifyContent="space-between"
            >
              <NFTDetailValue fontSize={Style.detailFontSize}>
                {Details.cost}
              </NFTDetailValue>
              <NFTNameLabel fontSize={Style.titleFontSize}>
                {Name ? Name : ""}
              </NFTNameLabel>
            </Grid>
            <Grid container width="100%">
              <NFTDetailValue fontSize={Style.detailFontSize}>{Details.vested}</NFTDetailValue>              
            </Grid>
            <Grid container>
              <NFTDetailValue fontSize={Style.detailFontSize}>{Details.bonus1}</NFTDetailValue>
            </Grid>
            <Grid container>
              <NFTDetailValue fontSize={Style.detailFontSize}>{Details.bonus2}</NFTDetailValue>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

NFTBanner.propTypes = {
  Image: PropTypes.string.isRequired,
  Name: PropTypes.string,
  Route: PropTypes.string,
  Details: PropTypes.shape({
    cost: PropTypes.string,
    vested: PropTypes.string,
    bonus1: PropTypes.string,
    bonus2: PropTypes.string,
  }).isRequired,
  Style: PropTypes.shape({
    bannerHeight: PropTypes.any,
    detailFontSize: PropTypes.any,
    titleFontSize: PropTypes.any,
    swiperBanner: PropTypes.bool,
  }).isRequired,
};

