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
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Trans } from "@lingui/macro";

import { Container } from "@mui/material";
import TFTButton from "components/TFTButton";

import DefNavBar from "pages/components/DefNavBar";

import ArticleList from "./sections/ArticleList";
import MainFace from "./sections/MainFace";

import { isUserLoggedIn } from "slices/auth";
import { getUser } from "slices/auth";

export default function ArticlePage() {
  const isLoggedIn = useSelector(isUserLoggedIn);
  const user = useSelector(getUser);
  const [searchTag, setSearchTag] = useState();

  function isUserTFTStuff() {
    if (user && user.roles) {
      for (let i = 0; i < user.roles.length; i++) {
        const role = user.roles[i];
        if (role === "admin" || role === "moderator")
          return true;
      }
      return false;
    }
    return false;
  }
  return (
    <>
      <DefNavBar />
      <Container>
        <MainFace setSearchTag={setSearchTag}/>
        {isLoggedIn && isUserTFTStuff() && (
          <TFTButton
            component={Link}
            to="/news/edit"
            color="warning"
            sx={{ float: "right" }}
          >
            <Trans>Create Article</Trans>
          </TFTButton>
        )}
        <ArticleList 
          countInPage={8} 
          needPagination={true} 
          searchTag = {searchTag}
        />
      </Container>
    </>
  );
}
