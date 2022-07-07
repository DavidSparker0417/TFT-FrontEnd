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
import { forwardRef } from "react";
import PropTypes from "prop-types";
import { InputAdornment } from "@mui/material";
import { SearchRounded } from "@mui/icons-material";

// TFTWebkit components
import { TFTIconInputRoot } from "components/TFTInput/TFTInputRoot";

const TFTSearchBox = forwardRef(({
  InputProps,
  sx,
  ...props
}, ref) => (
  <TFTIconInputRoot
    ref={ref}
    ownerState={{ error: false, success: false, disabled: false, normal: true }}
    InputProps={{
      ...InputProps,
      startAdornment:
        <InputAdornment position="start" sx={{ fontSize: { xs: "24px", md: "30px" }, }}>
          <SearchRounded />
        </InputAdornment>
    }}
    sx={{
      minWidth: "240px",
      maxWidth: "360px",
      width: "50%",
      ...(sx ? sx : {}),
    }}
    {...props}
  />
));

TFTSearchBox.propTypes = {
  InputProps: PropTypes.any,
  sx: PropTypes.any,
};

TFTSearchBox.displayName = "TFTSearchBox";
export default TFTSearchBox;
