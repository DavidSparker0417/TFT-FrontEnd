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
import { ReactComponent as IconLike } from "assets/images/symbol/like.svg";
import { ReactComponent as IconComment } from "assets/images/symbol/comment.svg";
import { IconWithText } from "pages/NewsPage/components";

export default function Article3rdParty({handleLike, handleComment, ...rest}) {
  return (
    <Grid
      container
      justifyContent="space-evenly"
      py={2}
      borderBottom="solid 1px white"
      {...rest}
    >
      <IconWithText
        icon={
          <IconLike
            width="48px"
            style={{ cursor: "pointer" }}
            onClick={handleLike}
          />
        }
        text="Like"
      />
      <IconWithText
        icon={
          <IconComment
            width="48px"
            style={{ cursor: "pointer" }}
            onClick={handleComment}
          />
        }
        text="Comment"
      />
    </Grid>
  );
}

Article3rdParty.defaultProps = {
  handleLike: null,
  handleComment: null,
};

Article3rdParty.propTypes = {
  handleLike: PropTypes.func,
  handleComment: PropTypes.func,
};