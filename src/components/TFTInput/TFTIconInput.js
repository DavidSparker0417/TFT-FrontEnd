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
import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// mui components
import InputAdornment from "@mui/material/InputAdornment";
// import EditOffIcon from "@mui/icons-material/EditOff";

// TFTWebkit components
import { TFTIconInputRoot } from "components/TFTInput/TFTInputRoot";

const TFTIconInput = forwardRef(({
  error, success, disabled, normal,
  icon,
  readOnly,
  InputProps,
  ...props
}, ref) => (
  <TFTIconInputRoot
    ref={ref}
    ownerState={{ error, success, disabled, normal }}
    fullWidth
    InputProps={{
      readOnly,
      ...InputProps,
      startAdornment: icon
        ? (
          <InputAdornment position="start">
            {icon}
          </InputAdornment>
        )
        : null,
      // endAdornment: readOnly
      //   ? (
      //     <InputAdornment position="end">
      //       <EditOffIcon />
      //     </InputAdornment>
      //   )
      //   : null,
    }}
    {...props}
  />
));

// Setting default values for the props of TFTIconInput
TFTIconInput.defaultProps = {
  error: false,
  success: false,
  disabled: false,
  normal: true
};

// Typechecking props for the TFTIconInput
TFTIconInput.propTypes = {
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
  normal: PropTypes.bool,
  icon: PropTypes.any,
  readOnly: PropTypes.any,
  InputProps: PropTypes.any,
};

TFTIconInput.displayName = "TFTIconInput";
export default TFTIconInput;
