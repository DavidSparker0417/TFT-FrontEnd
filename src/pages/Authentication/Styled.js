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

import { styled } from "@mui/material";
import TFTTypography from "../../components/TFTTypography";

export const LinkText = styled(TFTTypography)((props) => {
  return {
    fontWeight: "bold",
    color: "#1a73e8",
    fontSize: props.fontSize || "14px"
  };
});
