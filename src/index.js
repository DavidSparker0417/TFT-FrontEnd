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

import React from "react";
import ReactDOM from "react-dom";

// redux
import { Provider } from "react-redux";

// router
import { BrowserRouter } from "react-router-dom";

import store from "./store";
import App from "./App";

// theme
import "assets/css/fonts.css";

// report
import reportWebVitals from "./reportWebVitals";
import { GlobalProvider } from "contexts/global";
import { ContractProvider } from "contexts/contract";
import { NftProvider } from "contexts/nft";
import { UIProvider } from "contexts/ui";

import { Web3ContextProvider } from "contexts/web3/web3Context";

ReactDOM.render(
  <GlobalProvider>
    <Web3ContextProvider>
      <ContractProvider>
        <NftProvider>
          <Provider store={store}>
            <BrowserRouter>
              <UIProvider>
                <App />
              </UIProvider>
            </BrowserRouter>
          </Provider>
        </NftProvider>
      </ContractProvider>
    </Web3ContextProvider>
  </GlobalProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
