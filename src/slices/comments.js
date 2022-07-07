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

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Service from "service/comments.service";
import { Error, Success } from "./messages";

// add comments
export const addComment = createAsyncThunk("articles/comments/post",
  async ({ content, slug }, thunkAPI) => {
    try {
      const data = await Service.addComment(content, slug);
      thunkAPI.dispatch(Success("Comment successfully added!"));
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
  });

export const deleteComment = createAsyncThunk("articles/comments/delete",
  async ({ slug, id }, thunkAPI) => {
    try {
      const data = await Service.deleteComment(slug, id);
      thunkAPI.dispatch(Success("Comment successfully deleted!"));
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
  });

// put favorite
export const favoriteComment = createAsyncThunk("articles/comments/favorite",
  async ({ slug, id }, thunkAPI) => {
    try {
      const response = await Service.favoriteComment(slug, id);
      return response.data;
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
  });

export const getMyComments = createAsyncThunk("articles/comments/get",
  async (thunkAPI) => {
    try {
      const data = await Service.getMyComments();
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
  });

const initialState = {
  loading: false,
  error: false,
  comments: null,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    // post comment
    [addComment.pending]: (state) => {
      Object.assign(state, {
        loading: true,
        error: false,
        comments: null,
      });
    },
    [addComment.fulfilled]: (state) => {
      Object.assign(state, {
        loading: false,
        error: false,
        comments: null,
      });
    },
    [addComment.rejected]: (state) => {
      Object.assign(state, {
        loading: false,
        error: true,
        comments: null,
      });
    },

    // delete comment
    [deleteComment.pending]: (state) => {
      Object.assign(state, {
        loading: true,
        error: false,
        comments: null,
      });
    },
    [deleteComment.fulfilled]: (state) => {
      Object.assign(state, {
        loading: false,
        error: false,
        comments: null,
      });
    },
    [deleteComment.rejected]: (state) => {
      Object.assign(state, {
        loading: false,
        error: true,
        comments: null,
      });
    },

    // favorite comment
    [favoriteComment.pending]: (state) => {
      Object.assign(state, {
        loading: true,
        error: false,
        comments: null,
      });
    },
    [favoriteComment.fulfilled]: (state) => {
      Object.assign(state, {
        loading: false,
        error: false,
        comments: null,
      });
    },
    [favoriteComment.rejected]: (state) => {
      Object.assign(state, {
        loading: false,
        error: true,
        comments: null,
      });
    },

    // getMyComments
    [getMyComments.pending]: (state) => {
      Object.assign(state, {
        loading: true,
        error: false,
        comments: null,
      });
    },
    [getMyComments.fulfilled]: (state, action) => {
      Object.assign(state, {
        loading: false,
        error: false,
        comments: action.payload,
      });
    },
    [getMyComments.rejected]: (state) => {
      Object.assign(state, {
        loading: false,
        error: true,
        comments: null,
      });
    },
  },
});

export const cmtIsLoading = (state) => state.comments.loading;
export const cmtIsError = (state) => state.comments.error;
export const getComments = (state) => state.comments.comments;

export default commentsSlice.reducer;
