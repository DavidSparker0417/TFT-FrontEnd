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

const API_URL = API_BASE_URL + "nft/shipping";
export const postShipping = (
  wallet,
  tokenId,
  fullName,
  phoneNumber,
  email,
  postalCode,
  addrLine1,
  addrLine2,
  city,
  state,
  country
) => {
  return axios.post(API_URL, {
    wallet,
    tokenId,
    fullName,
    phoneNumber,
    email,
    postalCode,
    addrLine1,
    addrLine2,
    city,
    state,
    country
  }).then((response) => {
    return response.data;
  });
}
