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

export const GlobalContext = createContext();
export const GlobalProvider = ({ children }) => {
  const [config, setConfig] = useState();
  useEffect(() => {
    fetch("./config.json")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log("[DAVID] Config loaded. config = ", data);
        setConfig(data);
      })
      .catch(function (err) {
        console.log("[DAVID] Loading config failed! err = ", err);
      });
  }, []);
  return (
    <React.StrictMode>
      <GlobalContext.Provider value={{ config }}>
        {config && children}
      </GlobalContext.Provider>
    </React.StrictMode>
  );
};

export const useGlobal = () => {
  const globalData = useContext(GlobalContext);
  return globalData;
};

GlobalProvider.defaultProps = {
  children: undefined,
};

GlobalProvider.propTypes = {
  children: PropTypes.node,
};
