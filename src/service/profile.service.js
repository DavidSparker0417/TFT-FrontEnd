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
import { API_BASE_URL } from "constants";

const API_URL = API_BASE_URL + "profile";

const unfollow = async (username) => {
  try {
    const res = await axios.delete(`${API_URL}/${username}/follow`);
    return res.data;
  } catch (e) {
    return e.response;
  }
};

const follow = async (username) => {
  try {
    const res = await axios.post(`${API_URL}/${username}/follow`);
    return res.data;
  } catch (e) {
    return e.response;
  }
};

const checkFollowing = async (username) => {
  try {
    const res = await axios.get(`${API_URL}/${username}`);
    return res.data;
  } catch (e) {
    return e.response;
  }
};

const profileService = {
  unfollow,
  follow,
  checkFollowing,
};

export default profileService;
