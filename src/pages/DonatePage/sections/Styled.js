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

import { buttonUnstyledClasses, TabPanelUnstyled, TabsListUnstyled, TabUnstyled, tabUnstyledClasses } from "@mui/base";
import { styled } from "@mui/material";

export const borderColor = "#59b3ff"
export const bkColor = "#132b3f"

export const Tab = styled(TabUnstyled)(() => {
  return {
    color: "white",
    cursor: "pointer",
    fontSize: "1.25rem",
    fontWeight: "bold",
    backgroundColor: "inherit",
    width: "100%",
    padding: "12px 8px 30px 16px",
    borderRadius: "8px 8px 0 0",
    overflow: "hidden",
    border: `solid 1px ${borderColor}`,
    borderBottom: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    "&:hover": {
      backgroundColor: "#244e71"
    },

    [`&.${tabUnstyledClasses.selected}`]: {
      backgroundColor: "#091723",
    },

    [`&.${buttonUnstyledClasses.disabled}`]: {
      opacity: "0.5",
      cursor: "not-allowed"
    },
  }
});

export const TabsList = styled(TabsListUnstyled)({
  width: "fit-content",
  minWidth: "320px",
  backgroundColor: `${bkColor}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const TabPanel = styled(TabPanelUnstyled)({
  marginTop: "-20px",
  padding: "1rem",
  border: `solid 1px ${borderColor}`,
  backgroundColor: `${bkColor}`,
  borderRadius: "20px",
  zIndex: "10"
})
