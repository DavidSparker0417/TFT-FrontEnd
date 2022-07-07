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
import TFTBox from "components/TFTBox";
import TFTGoogleLogin from "components/TFTLogin/TFTGoogleLogin";

export default function LoginPanel() {
  return (
  <TFTBox>
    <TFTGoogleLogin />
  </TFTBox>);
}
