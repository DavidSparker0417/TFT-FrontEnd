/**
 **************************************************************
 * The Fans Together Website - v1.0.0
 **************************************************************
 *
 * Product Page:
 * Copyright 2022 @TFTTeam (https://www.tft-dev-team.com)
 *
 * Coded by DavidSparker, Telecrypto@OKI
 *
 **************************************************************
 */

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Trans } from "@lingui/macro";
import { Grid } from "@mui/material";
import TFTButton from "components/TFTButton";
import TFTTypography from "components/TFTTypography";

export default function ArticleNavigate({ navNextArticle, ...rest }) {
  return (
    <Grid container
      alignItems="center"
      justifyContent="space-between"
      mb={2}
      {...rest}>
      <TFTButton
        variant="outlined"
        component={Link}
        to="/news/"
        sx={{ borderRadius: "10px" }}
      >
        <Trans>Back To News</Trans>
      </TFTButton>
      {navNextArticle && (
        <Grid container alignItems="center" width="fit-content">
          <TFTButton
            variant="outlined"
            component={Link}
            to={navNextArticle.link}
            sx={{ borderRadius: "10px" }}
          >
            <Trans>Read next</Trans>
          </TFTButton>
          <TFTTypography
            width="fit-content"
            component={Link}
            to={navNextArticle.link}
            ml={2}
            sx={{
              textDecoration: "underline!important",
              display: {
                xs: "none",
                sm: "inherit",
              },
            }}
          >
            {navNextArticle.title}
          </TFTTypography>
        </Grid>
      )}
    </Grid>
  );
}

ArticleNavigate.defaultProps = {
  navNextArticle: undefined
};

ArticleNavigate.propTypes = {
  navNextArticle: PropTypes.object
}