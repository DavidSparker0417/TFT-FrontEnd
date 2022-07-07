/**
 **************************************************************
 * The Fans Together Website - v1.0.0
 **************************************************************
 * 
 * Product Page: 
 * Copyright 2022 @TFTTeam (https://www.tft-dev-team.com)
 * 
 * Coded by DavidSparker
 * Coded by Telecrypto@OKI
 * 
 **************************************************************
 */

import React from "react";
import PropTypes from "prop-types";

import Card from "@mui/material/Card";

import TFTTypography from "components/TFTTypography";
import TFTBox from "components/TFTBox";
import AnonymousPhoto from "assets/images/common/person.svg";


export default function TFTMemberCard({ photo, name, description, width, height, ...rest }) {
  return (
    <Card sx={{ alignItems: "center", height: `calc(${height} + 150px)` }} {...rest}>
      <TFTBox
        m={1}
        borderRadius="0.5rem 0.5rem 0 0"
        light
        sx={{ background: "#F1F1F1" }}
      >
        <TFTBox
          mx={{ xs: 1, lg: 3 }} my={1}
          component="img"
          src={photo}
          width={width}
          height={height}
          borderRadius="50%"
        />
      </TFTBox>

      <TFTTypography variant="h4" color="dark" align="center">
        {name}
      </TFTTypography>
      <TFTTypography variant="body2" align="center" mb={3}
        sx={{
          fontSize: "14px",
          lineHeight: "20px",
          color: "#808080",
          transform: "scale(1, 1.3)",
          marginTop: "8px",
          padding: "1px",
        }}>
        {description}
      </TFTTypography>
    </Card>
  )
}

TFTMemberCard.defaultProps = {
  name: "",
  description: "",
  width: "150px",
  height: "150px",
  photo: AnonymousPhoto,
}

TFTMemberCard.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
}
