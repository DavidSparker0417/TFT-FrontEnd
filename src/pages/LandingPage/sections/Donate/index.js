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
import { Link } from "react-router-dom";
import { t, Trans } from "@lingui/macro"

// mui components
import { Grid } from "@mui/material";

// TFTWebkit components
import TFTTypography from "components/TFTTypography";
import TFTNavigateButton from "components/TFTButton/TFTNavigateButton";

import { DonateContainer } from "./Styled";
import bkImage from "assets/images/donate/background.webp"

export default function Donate() {
  return (
    <DonateContainer bkimage={bkImage}>
      <Grid container direction="column">
        <TFTTypography variant="h3" fontSize="32px" lineHeight="1.25">
          <Trans>Want to support TFT?</Trans>
        </TFTTypography>
        <TFTTypography variant="body2" fontSize="20px" width="300px" mb={1}>
          <Trans id="home.donate.p0">
            The Fans Together is working hard to bring sports fans and pro clubs closer. Our donation info is below.
          </Trans>
        </TFTTypography>
        <TFTNavigateButton
          component={Link}
          to="/donate"
          name={t`Donate Here`} />
      </Grid>
    </DonateContainer>
  );
}
