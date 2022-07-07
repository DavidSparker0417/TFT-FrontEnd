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

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { t } from "@lingui/macro";

import { Grid } from "@mui/material";
import { RDMTextBox, RDMButton } from "./Styled";

export default function TFTReadMore({ text, limitation, img }) {
  const [isReadMore, setIsReadMore] = useState(true)
  const [child, setChild] = useState();
  
  useEffect(() => {
    if (!isReadMore) {
      setChild(text);
      return;
    }
    const contentsToShow = text?.props?.children;
    if (!contentsToShow) return;
    let cc2 = contentsToShow.filter((v, idx) => idx < limitation)
    const newText = React.createElement(text.type, text.props, cc2);
    setChild(newText);
  }, [isReadMore, text.props]);

  const toggleReadMore = () => {
    if (isReadMore === false) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
    setIsReadMore(!isReadMore);
  }

  return (
    <Grid
      container
      direction="column"
      sx={{ justifyContent: "center", alignItems: "center" }}
    >
      <RDMTextBox
        py={3}
        variant="body2"
        blur={isReadMore ? "true" : "false"}
        img={img}
      >
        {child}
      </RDMTextBox>
      <RDMButton
        variant="outlined"
        onClick={toggleReadMore}
      >
        {isReadMore ? t`Read More` : t`Show less`}
      </RDMButton>
    </Grid>
  )
}

TFTReadMore.defaultProps = {
  text: "",
  img: undefined,
  limitation: 12
}

TFTReadMore.propTypes = {
  text: PropTypes.any,
  limitation: PropTypes.number,
  img: PropTypes.any,
}