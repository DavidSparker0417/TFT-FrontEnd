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
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import TFTTypography from "components/TFTTypography";

export default function TFTPageFace({ image, height, title, description, children, sx, ...rest }) {
  return (
    <Grid
      container
      width="100%"
      height={height}
      direction="column"
      justifyContent="center"
      pl={2}
      sx={{
        background: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        ...sx
      }}
      {...rest}
    >
      <Grid item>
        <TFTTypography variant="h1">
          {title}
        </TFTTypography>
      </Grid>
      <Grid item>
        <TFTTypography
          mr={1}
          mb={2}
          variant="body2"
          fontSize="20px"
          letterSpacing="1px"
          width="100%"
          lineHeight="2rem"
        // textAlign="justify"
        >
          {description}
        </TFTTypography>
      </Grid>
      <Grid item>
        {children}
      </Grid>
    </Grid>
  )
}

TFTPageFace.defaultProps = {
  image: "",
  height: {
    xs: "400px",
    sm: "500px",
    lg: "700px"
  },
  title: "",
  description: "",
  children: undefined,
  sx: {}
};

TFTPageFace.propTypes = {
  image: PropTypes.string,
  height: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
  sx: PropTypes.object
};
