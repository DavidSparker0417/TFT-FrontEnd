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
import { useParams } from "react-router";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { t } from "@lingui/macro";

// mui components
import { Container } from "@mui/material";

import DefNavBar from "pages/components/DefNavBar";
import { ArticleBox } from "./components";
import ArticleHeader from "./sections/ArticleHeader";
import Article3rdParty from "./sections/Article3rdParty";
import CommentsList from "./sections/CommentsList";

import ArticleService from "service/articles.service";
import CommentService from "service/comments.service";
import { cmtIsLoading, cmtIsError } from "slices/comments";
import { Error } from "slices/messages";
import { isUserLoggedIn } from "slices/auth";
import {
  articlesIsLoading,
  getArticles,
  favoriteArticle,
} from "slices/articles";

// import { useUI } from "contexts/ui";

import "assets/css/article.css";
import ArticleNavigate from "./sections/ArticleNavigate";

export default function NewsPage() {
  const { slug } = useParams();
  const [navNextArticle, setNavNextArticle] = useState();
  const dispatch = useDispatch();
  const cmtLoading = useSelector(cmtIsLoading);
  const cmtError = useSelector(cmtIsError);
  const newsLoading = useSelector(articlesIsLoading);
  // const { setLoading } = useUI();
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const commentEnable = false;
  const articleList = useSelector(getArticles);
  const { pathname } = useLocation();
  const isLoggedIn = useSelector(isUserLoggedIn);

  useEffect(() => {
    const getNextArticle = (slug) => {
      if (!articleList) return undefined;
      const currentIndex = articleList.findIndex((a) => a.slug === slug);
      if (currentIndex === -1) return undefined;
      const nextArticleId = currentIndex + 1;
      if (nextArticleId >= articleList.length) return undefined;
      return articleList[nextArticleId];
    };

    const getArticle = (slug) => {
      // setLoading(true);
      ArticleService.getArticle(slug)
        .then((data) => {
          setArticle(data);
          // setLoading(false);
          const nextArticle = getNextArticle(slug);
          if (nextArticle) {
            const nextArticleLink = pathname.split(slug)[0] + nextArticle.slug;
            setNavNextArticle({
              title: nextArticle.title,
              link: nextArticleLink,
            });
          } else {
            setNavNextArticle(undefined);
          }
        })
        .catch((error) => {
          console.log("NewsPage getArticle() error:::", error);
          // setLoading(false);
          dispatch(Error("Failed to get article from backend."));
        });
    };

    if (newsLoading === false) {
      getArticle(slug);
    }
  }, [slug, newsLoading]);

  useEffect(() => {
    const getComments = (slug) => {
      CommentService.getCommentsByArticle(slug)
        .then((data) => {
          setComments(data);
        })
        .catch((error) => {
          console.log("NewsPage getCommentsByArticle() error:::", error);
          dispatch(Error(t`Failed to get comments from backend`));
        });
    };

    if (cmtLoading === false && cmtError === false) {
      getComments(slug);
    }
  }, [cmtLoading]);

  // useEffect(() => {
  //   setLoading(newsLoading || cmtLoading);
  // }, [newsLoading, cmtLoading]);

  function handleFavoriteMainArticle() {
    if (!isLoggedIn) {
      dispatch(Error(t`Please, login to add favorite!`));
      return;
    }
    dispatch(favoriteArticle({ slug, isLike: !article.favorited }));
  }

  return (
    <>
      <DefNavBar />
      <Container>
        {article ? (
          <>
            <ArticleHeader
              slug={slug}
              image={article.faceImage}
              title={article.title}
              description={article.description}
              content={article.content}
              author={article.author}
              tagList={article.tagList}
              date={article.createdAt}
            />
            <ArticleBox
              content={article.content}
              handleFavorite={handleFavoriteMainArticle}
              favoritesCount={article.favoritesCount}
              commentsCount={comments?.length}
              favorited={article.favorited}
              mb={2}
            />
            {commentEnable && (
              <>
                <Article3rdParty
                  mb={3}
                  handleLike={handleFavoriteMainArticle}
                  handleComment={() =>
                    window.location.replace("#comment-editor")
                  }
                />
                <CommentsList comments={comments} slug={slug} />
              </>
            )}
            <ArticleNavigate navNextArticle={navNextArticle} />
          </>
        ) : null}
      </Container>
    </>
  );
}
