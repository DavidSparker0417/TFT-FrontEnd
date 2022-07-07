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

import React, { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

import TFTTypographyRoot from "components/TFTTypography/TFTTypographyRoot";

const TFTTypography = forwardRef(
    ({
        color, fontWeight, textTransform, verticalAlign, textGradient, opacity, children,
        ...rest
    }, ref) => (
        <TFTTypographyRoot
            {...rest}
            ref={ref}
            ownerState={{
                color,
                textTransform,
                verticalAlign,
                fontWeight,
                opacity,
                textGradient,
            }}
        >
            {children}
        </TFTTypographyRoot>
    )
);

TFTTypography.defaultProps = {
    color: "light",
    fontWeight: false,
    textTransform: "none",
    verticalAlign: "unset",
    textGradient: false,
    opacity: 1,
};

TFTTypography.propTypes = {
    color: PropTypes.oneOf([
      "inherit",
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
      "text",
      "white",
    ]),
    fontWeight: PropTypes.oneOf([false, "light", "regular", "medium", "bold"]),
    textTransform: PropTypes.oneOf(["none", "capitalize", "uppercase", "lowercase"]),
    verticalAlign: PropTypes.oneOf([
      "unset",
      "baseline",
      "sub",
      "super",
      "text-top",
      "text-bottom",
      "middle",
      "top",
      "bottom",
    ]),
    textGradient: PropTypes.bool,
    children: PropTypes.node.isRequired,
    opacity: PropTypes.number,
  };

  TFTTypography.displayName = "TFTTypography";
  export default TFTTypography;
  