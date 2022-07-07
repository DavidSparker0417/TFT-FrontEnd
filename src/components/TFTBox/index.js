/**
 **************************************************************
 * The Fans Together WebKit - v1.0.0
 **************************************************************
 * 
 * Product Page: 
 * Copyright 2022 @TFTTeam (https://www.tft-dev-team.com)
 * 
 * Coded by Telecrypto@OKI (https://t.me/Telecrypto20)
 * 
 **************************************************************
 */

import React, { forwardRef } from "react";

import PropTypes from "prop-types";

import TFTBoxRoot from "components/TFTBox/TFTBoxRoot";

const TFTBox = forwardRef(
    ({ variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow, ...rest }, ref) => (
        <TFTBoxRoot
            {...rest}
            ref={ref}
            ownerState={{ variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow }}
        />
    )
);

// Setting default values for the props of TFTBox
TFTBox.defaultProps = {
    variant: "contained",
    bgColor: "transparent",
    color: "dark",
    opacity: 1,
    borderRadius: "none",
    shadow: "none",
    coloredShadow: "none",
};

// Typechecking props for the TFTBox
TFTBox.propTypes = {
    variant: PropTypes.oneOf(["contained", "gradient"]),
    bgColor: PropTypes.string,
    color: PropTypes.string,
    opacity: PropTypes.number,
    borderRadius: PropTypes.string,
    shadow: PropTypes.string,
    coloredShadow: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "light",
        "dark",
        "none",
    ]),
};

TFTBox.displayName = "TFTBox";
export default TFTBox;
