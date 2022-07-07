/**
 **************************************************************
 * The Fans Together Website - v1.0.0
 **************************************************************
 * 
 * Product Page: 
 * Copyright 2022 @TFTTeam (https://www.tft-dev-team.com)
 * 
 * Coded by Telecrypto@OKI
 * 
 **************************************************************
 */
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { t, Trans } from "@lingui/macro";


// @mui material components
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import TableFooter from "@mui/material/TableFooter";

import IconButton from "@mui/material/IconButton";

import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import FeedIcon from "@mui/icons-material/Feed";
import PersonIcon from "@mui/icons-material/Person";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";


// TFTWebkit components
import TFTTypography from "components/TFTTypography";
import TFTBox from "components/TFTBox";
import TFTButton from "components/TFTButton";
import TFTAvatar from "components/TFTAvatar";
import TFTIconInput from "components/TFTInput/TFTIconInput";

// templates
import DefNavBar from "pages/components/DefNavBar";
import TemplatePage from "pages/Templates";
import anonymousPhoto from "assets/images/common/person.svg";

// redux 
import { isUserLoggedIn, getUser } from "slices/auth";
import { getFavorArticles, getArticles, articlesIsLoading } from "slices/articles";
import { getMyComments, getComments, cmtIsLoading } from "slices/comments";

// context ui
import { useUI } from "contexts/ui";

// assets
import breakpoints from "assets/theme/base/breakpoints";
import bgImage from "assets/images/help/background.webp";

const {
  values: { sm, md, lg, xl, xxl },
} = breakpoints;

const MD = `@media (min-width: ${md}px)`;
const XL = `@media (min-width: ${xl}px)`;

export default function ProfilePage() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(isUserLoggedIn);
  const user = useSelector(getUser);

  const avatarImage = user && user.photo ? user.photo : anonymousPhoto;

  const PrfImage = styled(TFTBox)({
    padding: "24px",
    backgroundColor: "rgba(0, 32, 59, 0.6)",
    borderRadius: "36px",
    border: "2px solid #29455C",
    color: "white",
    width: "fit-content",
    height: "fit-content",
    marginBottom: "16px",
  });

  const PrfLabel = styled(TFTIconInput)({
    marginTop: "8px",
    marginBottom: "8px",
    width: "280px",
    [MD]: {
      width: "400px",
    },
    [XL]: {
      width: "520px",
    },

    "& .MuiInputBase-input": {
      textAlign: "center",
    },
  });

  if (isLoggedIn !== true || !user)
    navigate("/");

  return (
    <>
      <DefNavBar />
      <Container>
        <TemplatePage
          top="0"
          height="fit-content"
          banner={{
            background: `linear-gradient(360deg,rgba(0,26,47,0.4),rgba(0,26,47,0.6) 80%), url(${bgImage})`,
            backgroundPosition: "center bottom!important",
            height: {
              xs: "196px",
              sm: `${sm / 3}px`,
              md: `${md / 3}px`,
              lg: `${lg / 3}px`,
              xl: `${xl / 3}px`,
              xxl: `${xxl / 3}px`,
            },
            bottomSmooth: true,
          }}
        >
          <Grid container
            height="100%"
            spacing={1}
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            direction="column"
            sx={{ paddingTop: "max(10vh, 80px)", paddingBottom: "100px", }}
          >
            <TFTTypography variant="h3" mb={2}>
              <Trans>Profile</Trans>
            </TFTTypography>
            <PrfImage>
              <TFTBox
                component="img"
                src={avatarImage}
                width={{ xs: "148px", md: "196px", xl: "256px" }}
                height={{ xs: "148px", md: "196px", xl: "256px" }}
                borderRadius="50%"
              />
            </PrfImage>
            <PrfLabel
              type="standard"
              readOnly={true}
              icon={<PersonIcon />}
              value={user.username ? user.username : ""}
            />
            <PrfLabel
              type="standard"
              readOnly={true}
              icon={<AccountBalanceWalletIcon />}
              value={user.wallet ? user.wallet : ""}
            />
            <TFTButton
              component={Link}
              to="/setting"
              color="warning"
              size="large"
              sx={{
                borderRadius: "8px",
                fontSize: "16px",
                marginTop: "24px",
              }}
            >
              <Trans>Edit Profile Setting</Trans>
            </TFTButton>
          </Grid>

          <ProfileTabs />
        </TemplatePage>
      </Container>
    </>
  )
}

function TabPanel(props) {
  const { children, value, index, ...rest } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`profile-tabpanel-${index}`}
      aria-labelledby={`profile-tab-${index}`}
      {...rest}
    >
      {value === index && (
        <TFTBox sx={{ padding: "16px 16px 0px 16px" }}>
          {children}
        </TFTBox>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const TabItemProps = (index) => ({
  id: `profile-tab-${index}`,
  "aria-controls": `profile-tabpanel-${index}`,
});

function ProfileTabs() {
  const dispatch = useDispatch();
  const articlesLoading = useSelector(articlesIsLoading);
  const articles = useSelector(getArticles);
  const commentsLoading = useSelector(cmtIsLoading);
  const comments = useSelector(getComments);

  const { setLoading } = useUI();

  const [value, setValue] = useState(0);
  const [favorArticles, setFavorArticles] = useState([]);
  const [myComments, setMyComments] = useState([]);

  useEffect(() => {
    dispatch(getFavorArticles());
    dispatch(getMyComments());
  }, []);

  useEffect(() => {
    setLoading(articlesLoading || commentsLoading);
  }, [articlesLoading, commentsLoading]);

  useEffect(() => {
    if (articlesLoading === false && articles) {
      setFavorArticles(articles.map((article) => ({
        id: article.id,
        slug: article.slug,
        title: article.title,
        faceImage: article.faceImage,
        createdAt: article.createdAt,
        favoritesCount: article.favoritesCount,
        username: article.author.username,
        photo: article.author.photo,
      })));
    }
  }, [articlesLoading]);

  useEffect(() => {
    if (commentsLoading === false && comments) {
      setMyComments(comments.map((comment) => ({
        id: comment.id,
        slug: comment.article?.slug,
        title: comment.content.replace(/<\/?[^>]+>/gi, ' '),
        faceImage: comment.article?.faceImage,
        createdAt: comment.createdAt,
        favoritesCount: comment.favoritesCount,
        username: comment.article?.author.username,
        photo: comment.article?.author.photo,
      })));
    }
  }, [commentsLoading]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const TabContainer = styled(TFTBox)({
    padding: "8px",
    backgroundColor: "rgba(0, 32, 59, 0.6)",
    borderRadius: "24px",
    border: "2px solid #29455C",
    color: "white",
    width: "100%",
    height: "fit-content",
  });

  return (
    <TabContainer>
      <TFTBox sx={{ borderBottom: 1, borderColor: "white" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Profile Tabs"
        >
          {/* <Tab
            icon={<FeedIcon />}
            iconPosition="start"
            label={t`My comments`}
            {...TabItemProps(0)}
          /> */}
          <Tab
            icon={<FavoriteIcon />}
            iconPosition="start"
            label={t`Favorite articles`}
            {...TabItemProps(0)}
          />
        </Tabs>
      </TFTBox>

      <TabPanel value={value} index={0}>
        <ArticleTable
          articles={favorArticles}
          articlesCount={favorArticles.length}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ArticleTable
          articles={myComments}
          articlesCount={myComments.length}
        />
      </TabPanel>
    </TabContainer>
  );
}

function TablePaginationActions(props) {
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  const StyledIconButton = styled(IconButton)({
    color: "rgba(255,255,255,0.8) !important",
    fontSize: "26px !important",
    "&.Mui-disabled": {
      opacity: 0.3,
    },
  });

  return (
    <TFTBox sx={{ flexShrink: 0, ml: 2.5, }}>
      <StyledIconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        <FirstPageIcon />
      </StyledIconButton>
      <StyledIconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        <KeyboardArrowLeft />
      </StyledIconButton>
      <StyledIconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        <KeyboardArrowRight />
      </StyledIconButton>
      <StyledIconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        <LastPageIcon />
      </StyledIconButton>
    </TFTBox>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function ArticleTable(props) {
  const { articles, articlesCount } = props;
  const rowsPerPage = 5;

  const [page, setPage] = React.useState(0);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - articlesCount) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <Table aria-label="profile table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Author</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="right">FAV</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {articles.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((article) => {
            const {
              id,
              slug,
              faceImage,
              title,
              createdAt,
              favoritesCount,
              username,
              photo,
            } = article;

            return (
              <ArticleItem
                key={id}
                slug={slug}
                faceImage={faceImage}
                title={title}
                createdAt={createdAt}
                favoritesCount={favoritesCount}
                username={username}
                photo={photo}
              />
            );
          })}
          {emptyRows > 0 && (
            <TableRow style={{ height: 90 * emptyRows, backgroundColor: "transparent" }}>
              <TableCell colSpan={3} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5]}
              colSpan={3}
              count={articlesCount}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              ActionsComponent={TablePaginationActions}
              sx={{ border: "none !important" }}
            />
          </TableRow>
        </TableFooter>
      </Table>

    </>
  );
}

ArticleTable.propTypes = {
  articles: PropTypes.array,
  articlesCount: PropTypes.number,
};

function ArticleItem({
  slug,
  faceImage,
  title,
  createdAt,
  favoritesCount,
  username,
  photo,
}) {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {faceImage
          ? <TFTAvatar src={faceImage} size="xl" />
          : <TFTAvatar {...stringAvatar(title)} size="lg" />
        }
      </TableCell>
      <TableCell>
        <Grid item>
          <TFTBox
            component={Link}
            to={`/news/${slug}`}>
            <TFTTypography>
              {title.length > 32 ? title.slice(0, 28) + " ..." : title}
            </TFTTypography>
            <TFTBox display="flex" alignItem="center" justifyContent="flex-end">
              <img src={photo} height="24px" width="24px" style={{ borderRadius: "50%", marginRight: "8px" }} />
              <TFTTypography sx={{ color: "#adb5bd" }} fontSize="16px">
                {username}, {createdAt.split("T")[0]}
              </TFTTypography>
            </TFTBox>
          </TFTBox>
        </Grid>
      </TableCell>
      <TableCell>
        <TFTBox>
          <FavoriteIcon color="white" />
          <TFTTypography color="text"> {favoritesCount} </TFTTypography>
        </TFTBox>
      </TableCell>
    </TableRow >
  );
}

ArticleItem.propTypes = {
  slug: PropTypes.string,
  faceImage: PropTypes.any,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string,
  favoritesCount: PropTypes.number,
  username: PropTypes.string.isRequired,
  photo: PropTypes.string,
};

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  let avatarName = "";

  if (name.split(' ')[0])
    avatarName = name.split(' ')[0][0]?.toUpperCase();
  if (name.split(' ')[1])
    avatarName = avatarName + name.split(' ')[1][0].toUpperCase();
  if (avatarName === "")
    avatarName = "XX";

  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: avatarName,
  };
}