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
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function TFTBackdrop({open, description}) {
  return (
    <div>
      <Backdrop
        sx={{ 
          color: '#fff', 
          zIndex: (theme) => theme.zIndex.drawer + 1 ,
          flexDirection:"column"
        }}
        open={open}
      >
        <CircularProgress color="inherit" />
        <h1 style={{marginTop: "16px"}}>{description}</h1>
      </Backdrop>
    </div>
  );
}

TFTBackdrop.defaultProps = {
  open: false,
  description: undefined
};

TFTBackdrop.propTypes = {
  open: PropTypes.bool,
  description: PropTypes.string
};