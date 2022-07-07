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
import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for TFTInput
import { TFTInputRoot } from "components/TFTInput/TFTInputRoot";

const TFTInput = forwardRef(({ error, success, disabled, normal, ...rest }, ref) => (
  <TFTInputRoot {...rest} ref={ref} ownerState={{ error, success, disabled, normal }} />
));

// Setting default values for the props of TFTInput
TFTInput.defaultProps = {
  error: false,
  success: false,
  disabled: false,
  normal: true
};

// Typechecking props for the TFTInput
TFTInput.propTypes = {
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
  normal: PropTypes.bool
};

TFTInput.displayName = "TFTInput";
export default TFTInput;
