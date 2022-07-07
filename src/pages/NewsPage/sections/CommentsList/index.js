/**
 **************************************************************
 * The Fans Together Website - v1.0.0
 **************************************************************
 *
 * Product Page:
 * Copyright 2022 @TFTTeam (https://www.tft-dev-team.com)
 *
 * Coded by DavidSparker, Telecrypto@OKI
 *
 **************************************************************
 */

import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { Trans } from "@lingui/macro";

import { Grid } from "@mui/material";
import TFTTypography from "components/TFTTypography";
import TFTButton from "components/TFTButton";

import { CommentBox } from "pages/NewsPage/components";
// import HEditor from "pages/NewsPage/components/HEditor";

import { addComment, favoriteComment } from "slices/comments";
import TFTInput from "components/TFTInput";

export default function CommentsList({ comments, slug, ...rest }) {
  const [edittingComment, setEdittingComment] = useState();
  const dispatch = useDispatch();

  function onPostComment() {
    dispatch(
      addComment({
        content: edittingComment,
        slug: slug,
      })
    );
  }

  function handleFavoriteCommentArticle(cmt) {
    console.log("[DAVID] Favorite to comment. comment = ", cmt);
    dispatch(favoriteComment({ slug, id: cmt.id }));
  }

  return (
    <Grid container direction="column" mb={3} {...rest}>
      {comments && comments.length && (
        <>
          {comments.map((c, i) => (
            <CommentBox
              key={`comment-${i}`}
              author={c.author}
              content={c.content}
              favoritesCount={c.favoritesCount}
              handleFavorite={() => handleFavoriteCommentArticle(c)}
            />
          ))}
        </>
      )}
      <TFTTypography variant="h1" fontSize="28px" py={3}>
        <Trans>Comment here</Trans>
      </TFTTypography>
      <TFTInput
        multiline
        value = {edittingComment}
        onChange = {(e) => setEdittingComment(e.target.value)}
        InputProps={{
          style: {
            color: "white",
          },
        }}
      />
      {/* <HEditor
        id="comment-editor"
        handleModelChange={setEdittingComment}
        model={edittingComment}
      /> */}
      <TFTButton
        variant="outlined"
        sx={{ width: "fit-content", margin: "1rem 0" }}
        onClick={onPostComment}
      >
        <Trans>Post Your Comment</Trans>
      </TFTButton>
    </Grid>
  );
}

CommentsList.defaultProps = {
  comments: undefined,
  slug: undefined,
};

CommentsList.propTypes = {
  comments: PropTypes.array,
  slug: PropTypes.string,
};
