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
import { Link } from "react-router-dom";
import { Trans } from "@lingui/macro";

// mui components
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

// Webkit components
import TFTBox from "components/TFTBox";
import TFTButton from "components/TFTButton";

import ArticleList from "pages/ArticlePage/sections/ArticleList";
import { BlogTypography, SkewBox } from "./Styled";

const BlogTitle = () => {
  return (
    <SkewBox pl={1} width={{ xs: "80%", sm: "40%" }}>
      <BlogTypography
        variant="h4"
        py={1}
        fontSize="30px"
        textTransform="uppercase"
        sx={{ letterSpacing: "8px" }}
      >
        <Trans>News</Trans>
      </BlogTypography>
    </SkewBox>
  )
}

export default function Blogs() {
  return (<Container>
    <TFTBox mb={2}>
      <BlogTitle />
      <ArticleList countInPage={8} />
      <Grid container justifyContent="right">
        <TFTButton
          variable="outlined"
          color="warning"
          component={Link}
          to="/news"
          fontSize="15px"
          sx={{ float: "right", borderRadius: "4px", marginBottom: "4rem" }}
        >
          <Trans>More</Trans>
        </TFTButton>
      </Grid>
    </TFTBox>
  </Container>
  )
}
