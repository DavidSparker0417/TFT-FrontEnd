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

// @mui material components
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

// assets
import breakpoints from "assets/theme/base/breakpoints";

const MD = `@media (min-width: ${breakpoints.values.md}px)`;

export const TFTInputRoot = styled(TextField)(({ theme, ownerState }) => {
  const { palette, functions } = theme;
  const { error, success, disabled, normal } = ownerState;

  const { grey, transparent, error: colorError, success: colorSuccess } = palette;
  const { pxToRem } = functions;

  // styles for the input with error={true}
  const errorStyles = () => ({
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23F44335' viewBox='0 0 12 12'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23F44335' stroke='none'/%3E%3C/svg%3E\")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: `right ${pxToRem(12)} center`,
    backgroundSize: `${pxToRem(16)} ${pxToRem(16)}`,

    "& .Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline, &:after": {
        borderColor: colorError.main,
      },
    },

    "& .MuiInputLabel-root.Mui-focused": {
      color: colorError.main,
    },
  });

  // styles for the input with success={true}
  const successStyles = () => ({
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 8'%3E%3Cpath fill='%234CAF50' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: `right ${pxToRem(12)} center`,
    backgroundSize: `${pxToRem(16)} ${pxToRem(16)}`,

    "& .Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline, &:after": {
        borderColor: colorSuccess.main,
      },
    },

    "& .MuiInputLabel-root.Mui-focused": {
      color: colorSuccess.main,
    },
  });

  // styles for the input with success={true}
  const normalStye = () => ({
    border: "solid 1px white",
    "fieldset": {
      border: "none"
    },
    "input": {
      padding: "5px",
      color: "white",
    }
  });

  return {
    backgroundColor: disabled ? `${grey[200]} !important` : transparent.main,
    pointerEvents: disabled ? "none" : "auto",
    color: "white",
    ...(error && errorStyles()),
    ...(success && successStyles()),
    ...(normal && normalStye())
  };
});

export const TFTIconInputRoot = styled(TFTInputRoot)({
  backgroundColor: "#0d314680",
  border: "solid 2px #0d3146",
  borderRadius: "30px",
  padding: 0,
  "input: -webkit-autofill, input: -webkit-autofill:focus": {
    transition: "background-color 600000s 0s, color 600000s 0s",
  },

  "& .MuiInputBase-root": {
    color: "white",
    fontSize: "14px",
    [MD]: {
      fontSize: "18px",
    },

    "& .MuiInputAdornment-root" :{
      color: "rgba(255, 255, 255, 0.7) !important",
    },
  },
});