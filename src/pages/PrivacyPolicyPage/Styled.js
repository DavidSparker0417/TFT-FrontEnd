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

import { styled } from "@mui/material/styles";
import TFTTypography from "components/TFTTypography";
import breakpoints from "assets/theme/base/breakpoints";

const MD = `@media (min-width: ${breakpoints.values.md}px)`;
const LG = `@media (min-width: ${breakpoints.values.lg}px)`;

export const Title = styled(TFTTypography)({
  padding: "8px",
  fontSize: "40px",
  [MD]: {
    fontSize: "48px",
  },
  [LG]: {
    fontSize: "60px",
  },
  fontWeight: "bold",
  lineHeight: 1.3,
});

export const H1Text = styled(TFTTypography)({
  padding: "24px 4px 16px 4px",
  fontSize: "32px",
  [MD]: {
    fontSize: "42px",
  },
  [LG]: {
    fontSize: "52px",
  },
  fontWeight: "bold",
  lineHeight: 1.2,
});

export const H2Text = styled(TFTTypography)({
  padding: "16px 4px 8px 4px",
  fontSize: "26px",
  [MD]: {
    fontSize: "36px",
  },
  [LG]: {
    fontSize: "44px",
  },
  fontWeight: "bold",
  lineHeight: 1.2,
});

export const H3Text = styled(TFTTypography)({
  padding: "8px 4px 8px 4px",
  fontSize: "20px",
  [MD]: {
    fontSize: "30px",
  },
  [LG]: {
    fontSize: "36px",
  },
  fontWeight: "bold",
  lineHeight: 1.2,
});

export const BodyText = styled(TFTTypography)({
  padding: "0px",
  paddingBottom: "32px",
  fontSize: "14px",
  [MD]: {
    fontSize: "18px",
  },
  [LG]: {
    fontSize: "20px",
  },
  fontWeight: "normal",
  lineHeight: 1.2,
  wordBreak: "break-word",
  
  "li": {
    marginLeft: "28px",
  },
  "em": {
    fontStyle: "normal",
    fontWeight: "bold",
  },
  "a": {
    color: "rgb(123, 168, 231)",
    // textDecoration: "underline!important",
  },
});
