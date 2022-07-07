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
import { Trans } from "@lingui/macro";

import { Container, Grid } from "@mui/material";
import MuiLink from "@mui/material/Link";

import TFTTypography from "components/TFTTypography";
import TFTBox from "components/TFTBox";
import TFTButton from "components/TFTButton";
import TFTLikeButton from "components/TFTButton/TFTLikeButton";
import TFTSubTitle from "components/TFTSubTitle";
import TFTAuthorInfo from "components/TFTAuthorInfo";

import DefNavBar from "pages/components/DefNavBar";

import IconUser from "assets/images/common/person.svg";
import { ReactComponent as IconNavUp } from "assets/images/symbol/navigation/up-arrow.svg";
import { ReactComponent as IconFavorite } from "assets/images/symbol/like.svg";

export const NewsPart = ({ title, text, picture }) => {
  return (
    <TFTBox pl={2}>
      {title && title !== "" && <TFTSubTitle title={title} />}
      <TFTTypography
        variant="body2"
        fontSize="20px"
        lineHeight="2"
        textAlign="left"
      >
        {text}
      </TFTTypography>
      {picture && picture !== "" && (
        <Grid container justifyContent="center">
          <TFTBox component="img" src={picture} width="80%" my={3} />
        </Grid>
      )}
    </TFTBox>
  );
};

NewsPart.defaultProps = {
  title: "",
  text: "",
  picture: "",
};

NewsPart.propTypes = {
  title: PropTypes.string,
  text: PropTypes.any,
  picture: PropTypes.string,
};

export function News({ mainImg, title, description, news }) {
  return (
    <>
      <DefNavBar />
      <Container
        sx={{
          overflow: "hidden",
          background: `url(${mainImg})`,
          backgroundPosition: "right top",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <TFTTypography
          pt={20}
          variant="h1"
          fontSize={{
            xs: "32px",
            md: "48px",
          }}
        >
          {title}
        </TFTTypography>
        <TFTTypography py={2} variant="body2" fontSize="20px">
          {description}
        </TFTTypography>
        {news.map((part, i) => (
          <NewsPart
            key={`news-part-${i}`}
            title={part.title}
            text={part.text}
            picture={part.picture}
          />
        ))}
        <Grid container justifyContent="end">
          <TFTButton
            variant="outlined"
            href="#"
            startIcon={<IconNavUp width="20px" height="20px" fill="#ffffff" />}
            sx={{
              padding: "0px 10px",
              margin: "1rem",
              borderColor: "#5e8b9b",
              borderWidth: "2px",
              textTransform: "none",
              borderRadius: "5px",
            }}
          >
            <Trans>Back to top</Trans>
          </TFTButton>
        </Grid>
      </Container>
    </>
  );
}

News.defaultProps = {
  mainImg: "",
  title: "",
  description: "",
  news: [],
};

News.propTypes = {
  mainImg: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  news: PropTypes.array,
};

export function NewsLinkItem({ link, text, ...rest }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      style={{ color: "#7ba8e7", wordBreak: "break-all" }}
      {...rest}
    >
      {text}
    </a>
  );
}

NewsLinkItem.defaultProps = {
  link: "",
  text: "",
};

NewsLinkItem.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
};

export function ImgLinkButton({ image, title, link, ...rest }) {
  return (
    <Grid container direction="column" spacing={2} {...rest}>
      <Grid item container justifyContent="center">
        <TFTBox component="img" src={image} width="50%" />
      </Grid>
      <Grid item m={"auto"}>
        <TFTButton
          variant="outlined"
          component={MuiLink}
          href={link}
          sx={{ borderRadius: "20px" }}
        >
          {title}
        </TFTButton>
      </Grid>
    </Grid>
  );
}

ImgLinkButton.defaultProps = {
  image: "",
  title: "",
  link: "",
};

ImgLinkButton.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
};

const FooterTxt = ({ children }) => {
  return (
    <TFTTypography fontSize="16px" sx={{ color: "#ffffff7a" }} pl={2}>
      {children}
    </TFTTypography>
  );
};

FooterTxt.defaultProps = {
  children: undefined,
};

FooterTxt.propTypes = {
  children: PropTypes.node,
};
export const ArticleBox = ({
  author,
  date,
  content,
  favoritesCount,
  favorited,
  handleFavorite,
  commentsCount,
  ...rest
}) => {
  const commentEnable = false;
  return (
    <TFTBox pb={2} sx={{ borderBottom: "solid 1px white" }} {...rest}>
      {author && <TFTAuthorInfo author={author} date={date} />}
      <TFTBox
        className="tft-article"
        color="white"
        mb={1}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <Grid container px={3} justifyContent="space-between" alignItems="center">
        <Grid container alignItems="center" width="fit-content">
          <TFTLikeButton handleClick={handleFavorite} favorited={favorited}/>
          <FooterTxt>{favoritesCount}</FooterTxt>
        </Grid>
        {commentEnable && <FooterTxt>{commentsCount} Comments</FooterTxt>}
      </Grid>
    </TFTBox>
  );
};

ArticleBox.defaultProps = {
  author: undefined,
  date: undefined,
  content: undefined,
  favoritesCount: 0,
  commentsCount: 0,
  favorited: false,
};

ArticleBox.propTypes = {
  author: PropTypes.object,
  date: PropTypes.string,
  content: PropTypes.any,
  handleFavorite: PropTypes.func,
  favoritesCount: PropTypes.number,
  commentsCount: PropTypes.number,
  favorited: PropTypes.bool,
};

export function IconWithText({ icon, text }) {
  return (
    <Grid container width="fit-content" alignItems="center">
      {icon}
      <TFTTypography ml={2} fontSize="24px">
        {text}
      </TFTTypography>
    </Grid>
  );
}

IconWithText.defaultProps = {
  icon: undefined,
  text: undefined,
};

IconWithText.propTypes = {
  icon: PropTypes.any,
  text: PropTypes.string,
};

export function CommentBox({
  author,
  content,
  favoritesCount,
  handleFavorite,
  ...rest
}) {
  return (
    <Grid container spacing={2} pr={2} mb={2} {...rest}>
      <Grid item xs={2} sm={1} textAlign="right">
        <TFTBox
          width="36px"
          component="img"
          src={author.photo ? author.photo : IconUser}
        />
      </Grid>
      <Grid item container direction="column" xs={10} sm={11}>
        <TFTTypography>{author.username}</TFTTypography>
        <TFTBox
          className="tft-article"
          color="white"
          dangerouslySetInnerHTML={{ __html: content }}
          sx={{
            padding: "8px",
            borderRadius: "10px",
            backgroundColor: "#406779",
          }}
        />
        <Grid container justifyContent="end" alignItems="center">
          <IconFavorite
            width="16px"
            onClick={handleFavorite}
            style={{ cursor: "pointer" }}
          />
          <FooterTxt>{favoritesCount}</FooterTxt>
        </Grid>
      </Grid>
    </Grid>
  );
}

CommentBox.defaultProps = {
  favoritesCount: 0,
};

CommentBox.propTypes = {
  author: PropTypes.object,
  content: PropTypes.string,
  handleFavorite: PropTypes.func,
  favoritesCount: PropTypes.number,
};
