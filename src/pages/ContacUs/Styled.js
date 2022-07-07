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
import TFTInput from "components/TFTInput";

export const EmailMsgBox = styled(TFTInput)(() => {
  return {
    border: "solid 2px #0d3146",
    borderRadius: "20px",
    padding: "0",
  }
});
// textarea::-webkit-scrollbar {
//   width: 20px;
// }

// textarea::-webkit-scrollbar-track {
//   background: transparent;
//   border: 1px solid white
// }

// textarea::-webkit-scrollbar-thumb {
//   background: #4e4e4e;
//   border-radius: 25px;
// }