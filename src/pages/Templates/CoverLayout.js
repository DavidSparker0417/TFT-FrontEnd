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

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// pages
import DefNavBar from "pages/components/DefNavBar";
import TemplatePage from "./index.js";

import breakpoints from "assets/theme/base/breakpoints";
import bgDefault from "assets/images/templates/background.webp";

const {
  values: { sm, md, lg, xl, xxl },
} = breakpoints;

function CoverLayout({ image, children }) {
  return (
    <>
      <DefNavBar />
      <Container>
        <TemplatePage
          top="0"
          height="fit-content"
          sx={{
            minHeight: {
              xs: "calc(100vh - 320px)",
              md: "calc(100vh - 272px)"
            },
          }}
          banner={{
            background: `linear-gradient(360deg,rgba(0,26,47,0.4),rgba(0,26,47,0.6) 80%), url(${image})`,
            backgroundPosition: "center bottom!important",
            height: {
              xs: "196px",
              sm: `${sm / 2}px`,
              md: `${md / 2}px`,
              lg: `${lg / 2}px`,
              xl: `${xl / 3}px`,
              xxl: `${xxl / 3}px`,
            },
            bottomSmooth: true,
          }}
        >
          <Grid container
            height="100%"
            spacing={1}
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            sx={{
              paddingTop: {xs: "max(10vh, 100px)", md: "max(20vh, 100px)"},
              paddingBottom: "40px",
            }}
          >
            <Grid item xs={11} sm={9} md={8} lg={6} xl={5.5} xxl={5}>
              {children}
            </Grid>
          </Grid>
        </TemplatePage>
      </Container>
    </>
  );
}

// Setting default props for the CoverLayout
CoverLayout.defaultProps = {
  image: bgDefault,
};

// Typechecking props for the CoverLayout
CoverLayout.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default CoverLayout;
