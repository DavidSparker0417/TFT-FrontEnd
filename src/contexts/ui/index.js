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

import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import TFTBackdrop from "components/TFTBackdrop";
import AuthService from "service/auth.service";
const UIContext = createContext();

export function UIProvider({ children }) {
  const [loading, setLoading] = useState(false);

  // check login status
  async function checkLoginState() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user)
      return;

    // check if current user is expired
    AuthService.checkUserValid()
      .then((response) => {
        console.log("[DAVID] checkLoginState :: checkResult = ", response);
      })
      .catch(e => {
        if (e.response) {
          const eStatus = e.response.status;
          if (eStatus === 401) {
            console.log("[DAVID] checkLoginState :: checkFailed = ", e.response);
            const errorOnServer = e.response.data.error;
            if (errorOnServer && errorOnServer.name === "TokenExpiredError") {
              console.log("[DAVID] User expired! logging out... ");
            }
            AuthService.logout();
            window.location.reload();
          }
        }
      });
  }
  // timer for validating user
  useEffect(() => {
    console.log("[DAVID] +++++++++++++ Initial Loading ++++++++++ ");
    const ac = new AbortController();
    const callCheckLoginState = async() => {
      checkLoginState().then(() => {
        if (ac.signal.aborted === false) {
          setTimeout(() => callCheckLoginState(), 1000*60*5) // check every 5 minutes
        }
      })
    }

    callCheckLoginState();
    return () => ac.abort();
  }, [])
  
  return (
    <UIContext.Provider 
      value={{ 
        setLoading        : setLoading, 
      }}
    >
      {children}
      <TFTBackdrop open={loading} />
    </UIContext.Provider>
  );
}

export function useUI() {
  const data = useContext(UIContext);
  return data;
}

UIProvider.defaultProps = {
  children: undefined,
};

UIProvider.propTypes = {
  children: PropTypes.node,
};
