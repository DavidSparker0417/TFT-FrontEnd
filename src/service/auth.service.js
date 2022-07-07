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

import axios from "axios";
import authHeader from "./auth_header";
import { API_BASE_URL } from "constants";

const API_URL = API_BASE_URL + "auth/";

const setUserInfo = (data) => {
  localStorage.setItem("user", JSON.stringify(data));
};

const register = (type, data) => {
  const url = API_URL + `signup?type=${type}`;
  return axios.post(url, { data }).then((response) => {
    if (response.data.accessToken) {
      setUserInfo(response.data);
    }
    return response.data;
  });
};

const updateUser = (
  type,
  username,
  email,
  wallet,
  curPassword,
  newPassword,
  photo
) => {
  return axios
    .put(API_URL + "updateuser", 
    {
      type,
      username,
      email,
      wallet,
      curPassword,
      newPassword,
      photo,
    },
    {headers: authHeader()}
    )
    .then((response) => {
      if (response.data.accessToken) {
        setUserInfo(response.data);
      }
      return response.data;
    });
};

const updateWithWallet = (
  username,
  email,
  wallet,
  curPassword,
  newPassword,
  photo
) => {
  return axios
    .put(API_URL + "updatewithwallet", {
      username,
      email,
      wallet,
      curPassword,
      newPassword,
      photo,
    })
    .then((response) => {
      if (response.data.accessToken) {
        setUserInfo(response.data);
      }
      return response.data;
    });
};

const loginUser = (type, data) => {
  const url = API_URL + `signin?type=${type}`;
  return axios
    .post(url, {
      data: data,
    })
    .then((response) => {
      if (response.data.accessToken) {
        setUserInfo(response.data);
      }

      return response.data;
    });
};

const checkUserValid = () => {
  return axios
    .get(API_URL + "check", { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};

const loginWallet = (wallet) => {
  return axios
    .post(API_URL + "signin?walletLogin", { wallet: wallet })
    .then((response) => {
      if (response.data.accessToken) {
        setUserInfo(response.data);
      }
      return response.data;
    });
};

const socialLogin = (socialType, step, data) => {
  return axios
    .post(
      API_URL + `social?type=${socialType}&step=${step}`,
      data,
      {withCredentials: true}) // enable cookie
    .then((response) => {
      return response.data;
    });
}

const passwordReset = (email, token, password) => {
  let url = API_URL + "password-reset";
  if (token) url += `?token=${token}`
  console.log("[DAVID] passwordReset:: reqUrl = ", url);
  return axios
    .post(
      url,
      {
        email : email,
        password: password
      }
    )
    .then((response) => {
      return response.data;
    })
}

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  updateUser,
  updateWithWallet,
  loginUser,
  loginWallet,
  logout,
  checkUserValid,
  socialLogin,
  passwordReset
};

export default authService;
