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

import axios from "axios";
import { API_BASE_URL } from "constants";

const API_URL = API_BASE_URL + "ico";
export const registerICO = (email, wallet) => {
  return axios.put(API_URL, {email, wallet})
    .then((response) => {
      return response.data;
    });
}