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

import { NavigateNext } from "@mui/icons-material";
import TFTTypography from "components/TFTTypography";
import PropTypes from "prop-types";
import React from "react";
import TFTButton from ".";

export default function TFTNavigateButton({ name, ...rest }) {
  return (
    <TFTButton
      {...rest}
      color="warning"
      sx={{
        width: "fit-content",
        padding: "0.2rem 0.4rem 0.2rem 1.2rem",
        borderRadius: "1.5rem"
      }}
    >
      <TFTTypography variant="body2" fontWeight="bold" fontSize="20px">
        {name}
      </TFTTypography>
      <NavigateNext sx={{ width: "48px", height: "auto" }} />
    </TFTButton>
  )
}

TFTNavigateButton.defaultProps = {
  name: ""
}

TFTNavigateButton.propTypes = {
  name: PropTypes.string
}