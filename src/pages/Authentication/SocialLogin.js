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

import React, { useEffect } from "react";
import PropTypes from "prop-types";

// mui components
import IconButton from '@mui/material/IconButton';

// node components
import { useLocation, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import queryString from "query-string";
import { GoogleOAuthProvider } from "@react-oauth/google";

// services
import AuthService from "service/auth.service";
import { svcUtilGetErrMessage } from "service/util";

// contexts
import { useGlobal } from "contexts/global";

// TFT Components
import TFTLineBreak from "components/TFTBox/TFTLineBreak";
import TFTGoogleLogin from "components/TFTLogin/TFTGoogleLogin";

// assets
import {ReactComponent as IconTwitter} from "assets/images/brands/twitter.svg";

export default function SoicalLogin({onSuccess}) {
  const location = useLocation();
  const dispatch = useDispatch();
  const { config } = useGlobal();
  const twitterLogin = true;
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(async() => {
    const queries = queryString.parse(window.location.search);
    // delete all search parameters
    let searchKeys = [];
    searchParams.forEach(function (value, key) {
      searchKeys.push(key);
    });
    searchKeys.forEach((key) => {
      searchParams.delete(key);
    });
    setSearchParams(searchParams);

    const { oauth_token, oauth_verifier } = queries;
    if (!oauth_token || !oauth_verifier) return;
    // twitter login step 3
    console.log(
      `[DAVID] Twitter oauth step3 :: oauth_token = ${oauth_token}, oauth_verifier=${oauth_verifier}`
    );
    try {
      const twitterProfile = await AuthService.socialLogin("twitter", 3, {
        oauth_token,
        oauth_verifier,
        subpath: location.pathname
      });
      console.log("[DAVID] Twitter profile = ", twitterProfile);
      onSuccess && onSuccess({
        type: "twitter",
        data : {
          name: twitterProfile.name,
          photo: twitterProfile.photo
        }
      })
    } catch (e) {
      dispatch(Error("Twitter login failed!"));
      console.log(e.message);
    }
  }, []);

  function handleGoogleLogin(token) {
    onSuccess && 
    onSuccess({
      type: "google",
      data: {
        token: token,
      },
    });
  }

  async function handleTwitterLogin() {
    try {
      // step 1
      const { oauth_token } = await AuthService.socialLogin("twitter", 1, {subpath: location.pathname});
      console.log(
        "[DAVID] handleTwitterSignup :: Step 1 : token = ",
        oauth_token
      );
      // step 2
      window.location.href = `https://api.twitter.com/oauth/authenticate?oauth_token=${oauth_token}`;
    } catch (e) {
      dispatch(Error(svcUtilGetErrMessage(e)));
    }
  }
  return (
    <>
      {config.SOCIAL_LOGIN && (
        <>
          <TFTLineBreak />
          <GoogleOAuthProvider clientId={config.GOOGLE_CLIENT_ID}>
            <TFTGoogleLogin loginHandler={handleGoogleLogin} />
          </GoogleOAuthProvider>
          {twitterLogin && (
            <>
              <IconButton size="large" onClick={handleTwitterLogin}>
                <IconTwitter />
              </IconButton>
            </>
          )}
        </>
      )}
    </>
  );
}

SoicalLogin.defaultProps = {
  onSuccess: undefined
};

SoicalLogin.propTypes = {
  onSuccess: PropTypes.func
}