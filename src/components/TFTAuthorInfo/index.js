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
import { Grid } from "@mui/material";
import TFTBox from "components/TFTBox";
import TFTTypography from "components/TFTTypography";
import IconUser from "assets/images/common/person.svg";

function YMD2MDY(str) {
  const ymd = str.split('T')[0];
  const [year, month, day] = ymd.split("-");
  const mdy = [month, day, year].join('/');
  return mdy;
}

export default function TFTAuthorInfo({ author, date, sx, children, ...rest }) {
  if (!author)
    return<></>;
  return (
    <Grid container {...rest} alignItems="center" sx={{ ...sx }}>
      <TFTBox
        component="img"
        src={author.photo ? author.photo : IconUser}
        width="48px"
        height="48px"
        sx={{
          borderRadius: "50%",
          backgroundColor: "#4581b1",
          objectFit: "cover",
        }}
      />
      <Grid container direction="column" width="fit-content">
        <TFTTypography width="fit-content" pl={1} sx={{ color: "#72a18a" }}>
          {author.username}
        </TFTTypography>
        <TFTTypography ml={1} fontSize="16px" width="fit-content">
          {YMD2MDY(date)}
        </TFTTypography>
        {children}
      </Grid>
    </Grid>
  );
}

TFTAuthorInfo.defaultProps = {
  author: undefined,
  date: undefined,
  sx: undefined,
  children: undefined,
};

TFTAuthorInfo.propTypes = {
  author: PropTypes.object,
  sx: PropTypes.object,
  date: PropTypes.string,
  children: PropTypes.node,
};
