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

// Custom styles for TFTButton
import TFTButtonRoot from "components/TFTButton/TFTButtonRoot";

const TFTButton = forwardRef(
    ({ color, variant, size, circular, iconOnly, children, ...rest }, ref) => (
        <TFTButtonRoot
            {...rest}
            ref={ref}
            color="primary"
            variant={variant === "gradient" ? "contained" : variant}
            size={size}
            ownerState={{ color, variant, size, circular, iconOnly }}
        >
            {children}
        </TFTButtonRoot>
    )
);

// Setting default values for the props of TFTButton
TFTButton.defaultProps = {
    size: "medium",
    variant: "contained",
    color: "white",
    circular: false,
    iconOnly: false,
};

// Typechecking props for the TFTButton
TFTButton.propTypes = {
    size: PropTypes.oneOf(["small", "medium", "large"]),
    variant: PropTypes.oneOf(["text", "contained", "outlined", "gradient"]),
    color: PropTypes.oneOf([
        "default",
        "white",
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "light",
        "dark",
        "blue",
    ]),
    circular: PropTypes.bool,
    iconOnly: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

TFTButton.displayName = "TFTButton";
export default TFTButton;
