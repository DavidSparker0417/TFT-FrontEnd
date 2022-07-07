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
import TFTBox from "./";

export default function TFTLineBreak() {
  return (
    <TFTBox
      my={2}
      sx={{
        height: "1px",
        backgroundColor: "lightblue",
      }}
    />
  );
}
