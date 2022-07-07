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

import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import IconButton from '@mui/material/IconButton';
import {ReactComponent as IconGoogle} from "assets/images/brands/google.svg";

export default function TFTGoogleLogin({loginHandler}) {
  function onSuccess(resp) {
    const getProfileUrl = "https://www.googleapis.com/oauth2/v3/userinfo?access_token=" + resp.access_token;
    console.log("[DAVID] Google login success :: ", getProfileUrl);
    axios.get(getProfileUrl)
    .then((response) => {
      // return response.data;
      console.log("[DAVID] Google login user profile :: ", response.data);
      if (loginHandler) 
        loginHandler(resp.access_token);
    });
  }
  const login = useGoogleLogin({
    onSuccess: onSuccess,
  });
  
  return(
    <IconButton size = "small" onClick = {() => login()}>
      <IconGoogle />
    </IconButton>
  )
}

TFTGoogleLogin.defaultProps = {
  loginHandler: undefined
};

TFTGoogleLogin.propTypes = {
  loginHandler: PropTypes.func
}