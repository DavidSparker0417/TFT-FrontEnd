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

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Success, Error } from "./messages";

import AuthService from "../service/auth.service";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = !user
  ? {
    loading: false,
    error: null,
    isLoggedIn: false,
    user: null,
  }
  : {
    loading: false,
    error: null,
    isLoggedIn: true,
    user: user,
  };

export const register = createAsyncThunk(
  "auth/register",
  async ({ type, data }, thunkAPI) => {
    try {
      const resp = await AuthService.register(type, data);
      thunkAPI.dispatch(Success("User registered successfully!"));
      return { user: resp };
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

export const updateUser = createAsyncThunk(
  "auth/updateuser",
  async ({ type, username, email, wallet, curPassword, newPassword, photo }, thunkAPI) => {
    try {
      const data = await AuthService.updateUser(type, username, email, wallet, curPassword, newPassword, photo);
      thunkAPI.dispatch(Success("User updated successfully!"));
      return { user: data };
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


export const updateWithWallet = createAsyncThunk(
  "auth/updatewithwallet",
  async ({ username, email, wallet, curPassword, newPassword, photo }, thunkAPI) => {
    try {
      const data = await AuthService.updateWithWallet(username, email, wallet, curPassword, newPassword, photo);
      thunkAPI.dispatch(Success("User updated successfully!"));
      return { user: data };
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

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ type, data }, thunkAPI) => {
    try {
      const resp  = await AuthService.loginUser(type, data);
      thunkAPI.dispatch(Success("User login sucessfully!"));
      return { user: resp };
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

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      AuthService.logout();
      Object.assign(state, {
        loading: false,
        error: null,
        isLoggedIn: false,
        user: null,
      });
    },
  },
  extraReducers: {
    [register.pending]: (state/*, action*/) => {
      Object.assign(state, {
        loading: true,
        error: null,
        isLoggedIn: false,
        user: null,
      });
    },
    [register.fulfilled]: (state, action) => {
      Object.assign(state, {
        loading: false,
        error: null,
        isLoggedIn: true,
        user: action.payload.user,
      });
    },
    [register.rejected]: (state/*, action*/) => {
      Object.assign(state, {
        loading: false,
        error: null,
        isLoggedIn: false,
        user: null,
      });
    },
    [loginUser.pending]: (state/*, action*/) => {
      Object.assign(state, {
        loading: true,
        error: null,
        isLoggedIn: false,
        user: null,
      });
    },
    [loginUser.fulfilled]: (state, action) => {
      Object.assign(state, {
        loading: false,
        error: null,
        isLoggedIn: true,
        user: action.payload.user,
      });
    },
    [loginUser.rejected]: (state/*, action*/) => {
      Object.assign(state, {
        loading: false,
        error: null,
        isLoggedIn: false,
        user: null,
      });
    },
    [updateUser.pending]: () => {},
    [updateUser.fulfilled]: (state, action) => {
      Object.assign(state, {
        loading: false,
        error: null,
        isLoggedIn: true,
        user: action.payload.user,
      });
    },
    [updateUser.rejected]: () => {},

    [updateWithWallet.pending]: () => {},
    [updateWithWallet.fulfilled]: (state, action) => {
      Object.assign(state, {
        loading: false,
        error: null,
        isLoggedIn: true,
        user: action.payload.user,
      });
    },
    [updateWithWallet.rejected]: () => {},
  },
});

export const isUserLoggedIn = (state) => state.auth.isLoggedIn;
export const isLoading = (state) => state.auth.loading;
export const error = (state) => state.auth.error;
export const getUser = (state) => state.auth.user;
export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
