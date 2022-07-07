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
import TFTTypography from "components/TFTTypography";
import TFTButton from "components/TFTButton";

import breakpoints from "assets/theme/base/breakpoints";

const XS = `@media (min-width: ${breakpoints.values.xs}px)`;
const SM = `@media (min-width: ${breakpoints.values.sm}px)`;
const MD = `@media (min-width: ${breakpoints.values.md}px)`;
const LG = `@media (min-width: ${breakpoints.values.lg}px)`;
const XL = `@media (min-width: ${breakpoints.values.xl}px)`;
const XXL = `@media (min-width: ${breakpoints.values.xxl}px)`;

export const RDMTextBox = styled(TFTTypography)(({ blur, img }) => ({
  position: "relative",
  textAlign: "left",
  whiteSpace: "pre-line",
  backgroundImage: img,
  backgroundSize: "contain",
  backgroundPosition: "center center",
  opacity: blur === "true" ? "0.7" : "1",

  lineHeight: "1.5",

  [XS]: { fontSize: "14px", },
  [SM]: { fontSize: "16px", },
  [MD]: { fontSize: "18px", },
  [LG]: { fontSize: "20px", },
  [XL]: { fontSize: "22px", },
  [XXL]: { fontSize: "24px", },

  "&:before": {
    position: "absolute",
    content: '""',
    left: "0",
    top: "0",
    width: "100%",
    height: "20px",
    background: "linear-gradient(360deg, transparent, rgba(0,26,47,1)) 80%",
  },

  "&:after": {
    position: "absolute",
    content: '""',
    left: "0",
    bottom: "0",
    width: "100%",
    height: blur === "true" ? "100%" : "20px",
    background: "linear-gradient(180deg, transparent, rgba(0,26,47,1)) 80%",
  },
}));

export const RDMButton = styled(TFTButton)({
  background: "transparent",
  padding: "1.5% 2% 1.2% 2%",
  border: "2px solid #59b3ff",

  fontWeight: "bold",
  [XS]: {
    borderRadius: "8px",
    fontSize: "14px",
  },

  [SM]: {
    borderRadius: "10px",
    fontSize: "16px",
  },

  [MD]: {
    borderRadius: "14px",
    fontSize: "18px",
  },

  [LG]: {
    borderRadius: "16px",
    fontSize: "20x",
  },

  [XL]: {
    borderRadius: "20px",
    fontSize: "22px",
  },

  [XXL]: {
    borderRadius: "22px",
    fontSize: "24px",
  },
});
