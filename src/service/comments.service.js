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

// add comment
const addComment = (content, slug) => {
  return axios.post(
    API_URL + slug + "/comments",
    { content: content }, // data
    { headers: authHeader() } // config
  ).then((response) => {
    return response.data;
  });
};

const favoriteComment = (slug, id) => {
  return axios.post(
    API_URL + slug + "/comments/favorite/" + id,
    {}, // data
    { headers: authHeader() } // config
  );
};

const deleteComment = (slug, id) => {
  return axios.delete(
    API_URL + slug + "/comments/" + id,
    {}, // data
    { headers: authHeader() } // config
  ).then((response) => {
    return response.data;
  });
};

const getMyComments = () => {
  return axios.get(API_URL + "comments", { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};


const getCommentsByArticle = (slug) => {
  return axios.get(API_URL + slug + "/comments", { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};

export default {
  addComment,
  favoriteComment,
  deleteComment,
  getMyComments,
  getCommentsByArticle,
};