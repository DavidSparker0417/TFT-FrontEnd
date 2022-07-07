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

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Service from "../service/articles.service";
import { Error, Success } from "./messages";

export const getAllArticles = createAsyncThunk(
  "articles/alllist",
  async ({page, countInPage, tag}, thunkAPI) => {
    try {
      const data = await Service.getAllArticles(page, countInPage, tag);
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(Error(message));
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

export const getMyArticles = createAsyncThunk(
  "articles/mylist",
  async (thunkAPI) => {
    try {
      const data = await Service.getMyArticles();
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(Error(message));
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

export const getFavorArticles = createAsyncThunk(
  "articles/favorlist",
  async (thunkAPI) => {
    try {
      const data = await Service.getFavorArticles();
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(Error(message));
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

export const createArticle = createAsyncThunk(
  "articles/create",
  async ({ title, description, face, content, tagList }, thunkAPI) => {
    try {
      const data = await Service.createArticle(title, description, face, content, tagList);
      thunkAPI.dispatch(Success("Article successfully created!"));
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(Error(message));
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

export const updateArticle = createAsyncThunk(
  "articles/update",
  async ({ slug, title, description, face, content, tagList }, thunkAPI) => {
    try {
      const data = await Service.updateArticle(slug, title, description, face, content, tagList);
      thunkAPI.dispatch(Success("Article successfully updated!"));
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(Error(message));
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

// favorites
export const favoriteArticle = createAsyncThunk("articles/favorite",
  async ({ slug, isLike }, thunkAPI) => {
    try {
      const data = await Service.favoriteArticle(slug, isLike);
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(Error(message));
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

const initialState = {
  loading: false,
  error: false,
  articles: null,
  articlesCount: 0,
  slug: "",
};

const articlesSlice = createSlice({
  name: "articles",
  initialState: initialState,
  reducers: {
    clearState: (state) => {
      Object.assign(state, initialState);
    },
  },
  extraReducers: {
    // create article
    [createArticle.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.slug = "";
    },
    [createArticle.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.slug = action.payload.slug;
    },
    [createArticle.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      state.slug = "";
    },

    // update article
    [updateArticle.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.slug = "";
    },
    [updateArticle.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.slug = action.payload.slug;
    },
    [updateArticle.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      state.slug = "";
    },

    // post favorite
    [favoriteArticle.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [favoriteArticle.fulfilled]: (state) => {
      state.loading = false;
      state.error = false;
    },
    [favoriteArticle.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    // get all the list of articles
    [getAllArticles.pending]: (state) => {
      Object.assign(state, {
        loading: true,
        error: false,
        articles: null,
        articlesCount: 0,
      });
    },

    [getAllArticles.fulfilled]: (state, action) => {
      Object.assign(state, {
        loading: false,
        error: false,
        articles: action.payload.articles,
        articlesCount: action.payload.articlesCount,
      });
    },
    [getAllArticles.rejected]: (state) => {
      Object.assign(state, {
        loading: false,
        error: true,
        articles: null,
        articlesCount: 0,
      });
    },

    // get my articles
    [getMyArticles.pending]: (state) => {
      Object.assign(state, {
        loading: true,
        error: false,
        articles: null,
        articlesCount: 0,
      });
    },
    [getMyArticles.fulfilled]: (state, action) => {
      Object.assign(state, {
        loading: false,
        error: false,
        articles: action.payload.articles,
        articlesCount: action.payload.articlesCount,
      });
    },
    [getMyArticles.rejected]: (state) => {
      Object.assign(state, {
        loading: false,
        error: true,
        articles: null,
        articlesCount: 0,
      });
    },

    // get favorite articles
    [getFavorArticles.pending]: (state) => {
      Object.assign(state, {
        loading: true,
        error: false,
        articles: null,
        articlesCount: 0,
      });
    },
    [getFavorArticles.fulfilled]: (state, action) => {
      Object.assign(state, {
        loading: false,
        error: false,
        articles: action.payload.articles,
        articlesCount: action.payload.articlesCount,
      });
    },
    [getFavorArticles.rejected]: (state) => {
      Object.assign(state, {
        loading: false,
        error: true,
        articles: null,
        articlesCount: 0,
      });
    },
  },
});

export const articlesIsLoading = (state) => state.articles.loading;
export const articlesIsError  = (state) => state.articles.error;
export const getArticleSlug  = (state) => state.articles.slug;
export const getArticles = (state) => state.articles.articles;
export const getArticlesCount = (state) => state.articles.articlesCount;

export const { clearState } = articlesSlice.actions;
export default articlesSlice.reducer;
