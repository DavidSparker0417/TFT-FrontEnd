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

import { Trans } from "@lingui/macro";

import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import TFTTypography from "components/TFTTypography";
import TFTButton from "components/TFTButton";
import TFTBox from "components/TFTBox";

import iconDoc from "assets/images/symbol/doc.svg"
import bgImage from "assets/images/about/whitepaper-bg.webp";


const WhitepaperBG = styled(Grid)({
  position: "relative",
  alignItems: "center",
  width: "100%",
  background: `linear-gradient(180deg, rgba(0,26,47,1),rgba(0,26,47,0.6) 10%), url(${bgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center center",

  "&:after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "128px",
    background: "linear-gradient(180deg,transparent,rgba(0,26,47,1) 80%)",
  },
});

export default function WhitePaper() {
  return (
    <WhitepaperBG
      container
      mt={{ lg: "64px", xs: "32px" }}
      height={{
        xs: "400px",
        sm: "400px",
        lg: "500px",
      }}
    >
      <Grid item ml={2}>
        <TFTTypography variant="h1"
          fontSize={{ xs: "30px", md: "34px", lg: "38px", xl: "42px" }}
          letterSpacing="2px"
        // sx={{letterSpacing: "2px"}}
        >
          <Trans>Whitepaper</Trans>
        </TFTTypography>
        <TFTTypography variant="body2"
          mb={3} mt={2}
          lineHeight="1.5"
          fontSize={{ xs: "16px", md: "18px", lg: "20px", xl: "24px" }}
        >
          <Trans id="about.white.desc0">
            Want to have a look at what our plans for TFT are?<br />
            Take a look at our whitepaper here.
          </Trans>
        </TFTTypography>
        <TFTButton
          href="/white-paper"
          target="_blank"
          color="warning"
          sx={{
            borderRadius: "20px",
            fontSize: "20px"
          }}
        >
          <TFTBox
            width="24px"
            height="24px"
            mr={1}
            sx={{
              background: `url(${iconDoc})`
            }}
          />
          <Trans>Whitepaper</Trans>
        </TFTButton>
      </Grid>
    </WhitepaperBG>
  )
}