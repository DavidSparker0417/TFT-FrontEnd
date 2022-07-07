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

import React, { useState, useEffect } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Pagination } from "@mui/material";

import TFTArticleCard from "components/Cards/TFTArticleCard";
import { getAllArticles } from "slices/articles";

const StyledPagination = styled(Pagination)({
  "& .MuiPaginationItem-root": {
    color: "#fff",
  },
});

export default function ArticleList({ countInPage, needPagination, searchTag }) {
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  const articleSlice = useSelector((state) => state.articles);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    dispatch(getAllArticles({ page: currentPage, countInPage, tag: searchTag }));
  }, [currentPage, searchTag]);

  useEffect(() => {
    if (!articleSlice || articleSlice.loading === true) return;

    const dbArticleList = articleSlice.articles;
    const articlesCount = articleSlice.articlesCount;
    let nList = [];
    dbArticleList?.map((n) => {
      nList.push({
        image: `${n.faceImage}`,
        title: n.title,
        description: n.description,
        route: `/news/${n.slug}`,
      });
    });
    setList(nList);
    setPageCount(Math.ceil(articlesCount / countInPage));
  }, [articleSlice]);

  return (
    <>
      <Grid container justifyContent="center">
        {list.map((e, i) => (
          <Grid item key={i} xs={6} md={4} lg={3} p={1}>
            <TFTArticleCard
              photo={e.image}
              name={e.title}
              height={{
                xs: "150px",
                md: "200px",
              }}
              description={e.description}
              to={e.route}
              sx={{ lineSpaceing: "5px" }}
            />
          </Grid>
        ))}
      </Grid>
      {needPagination && pageCount && pageCount > 1 && (
        <StyledPagination
          count={pageCount}
          variant="outlined"
          shape="rounded"
          color="white"
          onChange={(event, value) => setCurrentPage(value - 1)}
        />
      )}
    </>
  );
}

ArticleList.defaultProps = {
  countInPage: 4,
  needPagination: false,
  searchTag: undefined
};

ArticleList.propTypes = {
  countInPage: PropTypes.number,
  needPagination: PropTypes.bool,
  searchTag: PropTypes.string
};
