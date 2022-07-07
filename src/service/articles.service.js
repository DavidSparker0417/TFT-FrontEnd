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

import axios from "axios";
import { SERVER } from "constants";
import authHeader from "./auth_header";

const API_URL = SERVER + "api/articles/";

const limit = (count, p) => `limit=${count}&offset=${p ? p * count : 0}`;

const getArticle = (slug) => {
  return axios
    .get(API_URL + slug, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};

const getAllArticles = (page, count, tag) => {
  const url = API_URL 
  + `all?${limit(count, page)}`
  + (tag ? `&tag=${tag}` : "");
  return axios.get(
    url).then((response) => {
    return response.data;
  });
};

const getMyArticles = () => {
  return axios
    .get(API_URL + "list", { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};

const getFavorArticles = () => {
  return axios
    .get(API_URL + "list?favor=1", { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};

const createArticle = (title, description, face, content, tagList) => {
  return axios
    .post(
      API_URL,
      { article: { title, description, face, content, tagList } }, // data
      { headers: authHeader() } // config
    )
    .then((response) => {
      return response.data;
    });
};

const updateArticle = (slug, title, description, face, content, tagList) => {
  return axios
    .post(
      API_URL + slug,
      { article: { title, description, face, content, tagList } }, // data
      { headers: authHeader() } // config
    )
    .then((response) => {
      return response.data;
    });
};

const favoriteArticle = (slug, isLike) => {
  const url = API_URL + slug + "/favorite";
  const config = { headers: authHeader() };
  const command = isLike
    ? axios.post(url, {}, config)
    : axios.delete(url, config);
  return command.then((response) => {
    return response.data;
  });
};

export default {
  getArticle,
  getAllArticles,
  getMyArticles,
  getFavorArticles,
  createArticle,
  updateArticle,
  favoriteArticle,
};
