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
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { Trans } from "@lingui/macro";

import { Grid } from "@mui/material";

import TFTBox from "components/TFTBox";
import TFTButton from "components/TFTButton";
import TFTTypography from "components/TFTTypography";
import TFTAuthorInfo from "components/TFTAuthorInfo";

import { getUser } from "slices/auth";

export default function ArticleHeader({
  slug,
  image,
  title,
  description,
  content,
  author,
  tagList,
  date
}) {
  const navigate = useNavigate();
  const user = useSelector(getUser);
  const [isEdittable, setIsEdittable] = useState(false);

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

  useEffect(() => {
    if (!author || !user)
      return;
    setIsEdittable(isUserTFTStuff() || user.username === author.username);
  }, []);

  return (
    <Grid container direction="column">
      {image && (
        <Grid item container>
          <TFTBox
            component="img"
            src={image}
            width="auto"
            height="fit-cotent"
            maxWidth="100%"
            maxHeight="600px"
            my={3}
            mx={"auto"}
          />
        </Grid>
      )}
      <Grid // header
        item
        container
        direction="column"
        justifyContent="center"
        mt={3}
        mb={1}
        pb={2}
        sx={{ 
          overflowWrap: "anywhere",
          borderBottom: "solid 1px white" 
        }}
      >
        {isEdittable && <TFTButton
          variant="outlined"
          onClick={() => {
            navigate("/news/edit", {
              state: {
                slug,
                title,
                description,
                content,
                faceImage: image,
                tagList,
              }
            });
          }}
          sx={{
            width: "fit-content",
            height: "fit-content",
            minHeight: "0",
            border: "none",
            borderRadius: "10px",
            fontSize: "12px",
            padding: "8px",
          }}
        >
          <Trans>Edit This News</Trans>
        </TFTButton>}
        <TFTTypography 
          variant="h1" 
          fontSize={{
            xs: "32px",
            sm: "48px"
          }}
        >
          {title}
        </TFTTypography>
        <Grid container justifyContent="end" alignItems="center">
          <TFTAuthorInfo
            author={author}
            date={date}
            justifyContent="end"
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

ArticleHeader.propTypes = {
  slug: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.any,
  author: PropTypes.any,
  tagList: PropTypes.any,
  date: PropTypes.string
};
