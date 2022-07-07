/**
 **************************************************************
 * The Fans Together Website - v1.0.0
 **************************************************************
 * 
 * Product Page: 
 * Copyright 2022 @TFTTeam (https://www.tft-dev-team.com)
 * 
 * Coded by Telecrypto@OKI, DavidSparker
 * 
 **************************************************************
 */

import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { t } from "@lingui/macro";

// TFTWebkit components
import TFTNavbar from "components/TFTNavBar";

import { isUserLoggedIn, getUser, logoutUser } from "slices/auth";

import LogoGrand from "assets/images/logo.png";
import anonymousPhoto from "assets/images/common/person.svg";

export default function TFTDefNavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(isUserLoggedIn);
  const user = useSelector(getUser);
  const avatarImage = user && user.photo ? user.photo : anonymousPhoto;
  const messages = useSelector(state => state.messages);
  const alarms = messages?.items.filter(m => (m.severity === "error")).map(m => m.text);

  const routes = [
    {
      name: t`About`,
      route: "/about",
    },
    {
      name: t`News`,
      route: "/news",
    },
    {
      name: t`Pre-ICO`,
      route: "/ico"
    },
    {
      name: t`Claimer`,
      route: "/claim"
    },
    {
      name: t`Contact`,
      route: "/contact",
    },
    {
      name: t`Whitepaper`,
      route: "/white-paper",
    },
    {
      name: t`Log In`,
      route: "/signin",
    },
  ];
  
  const routesLogin = [
    {
      name: t`About`,
      route: "/about",
    },
    {
      name: t`News`,
      route: "/news",
    },
    {
      name: t`Pre-ICO`,
      route: "/ico"
    },
    {
      name: t`Claimer`,
      route: "/claim"
    },
    {
      name: t`Contact`,
      route: "/contact",
    },
    {
      name: t`Whitepaper`,
      route: "/white-paper",
    },
  ];
  
  return (
    <TFTNavbar
      brand={{ image: LogoGrand, height: "48px" }}
      routes={isLoggedIn ? routesLogin : routes}
      relative
      avatar={isLoggedIn ? {
        image: avatarImage,
        height: "48px",
        handleClickProfile: () => {
          navigate("/profile");
        },
        handleClickSetting: () => {
          navigate("/setting");
        },
        handleClickLogout: () => {
          dispatch(logoutUser());
          navigate("/");
        },
      } : undefined}
      notification={alarms}
      loginMenu
    />
  );
}
