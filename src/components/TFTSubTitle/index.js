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
// import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import TFTTypography from "components/TFTTypography";
import background from "assets/images/news/subtitle.webp";

export default function TFTSubTitle({ title }) {
  return (
    // <Grid container
    //   height="80px"
    //   // justifyContent="center"
    //   alignItems="center"
    //   {...rest}
    // >
      <TFTTypography 
        variant="h4" 
        fontSize={{
          xs: "20px",
          md:"32px",
        }}
        width="fit-content"
        minWidth="50%"
        mt={2}
        mb={1}
        py={"1rem"}
        // pr={16}
        sx={{
          background: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
        }}
        // sx={{
        //   background: "radial-gradient(#001a2f96 70%, transparent)",
        //   borderRadius: "10px"
        // }}
      >
        {title}
      </TFTTypography>
    // </Grid>
  )
};

TFTSubTitle.defaultProps = {
  title: ""
};

TFTSubTitle.propTypes = {
  title: PropTypes.string
};