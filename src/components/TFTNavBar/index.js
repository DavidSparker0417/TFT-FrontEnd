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

import React, { useState, useEffect } from "react";

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

import { i18n } from "@lingui/core";

// @mui material components
import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";

// TFT webkit components
import TFTBox from "components/TFTBox";
import TFTNavbarDropdown from "components/TFTNavBar/NavbarDropdown";
import TFTNavbarMobile from "components/TFTNavBar/NavbarMobile";
import TFTAlarmNotifier from "components/Poppers/TFTAlarmNotifier";
import TFTProfileMenu from "components/Poppers/TFTProfileMenu";
import TFTLocaleSwitcher from "components/Poppers/TFTLocaleSwitcher";

// TFT webkit base styles
import breakpoints from "assets/theme/base/breakpoints";
import { locales, selectLocale } from "assets/locales";

export default function TFTNavbar({
  brand, routes, avatar, notification, transparent, light, sticky, relative, center
}) {
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const openMobileNavbar = () => setMobileNavbar(!mobileNavbar);

  useEffect(() => {
    // A function that sets the display state for the TFTNavbarMobile.
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }

    /** 
     The event listener that's calling the displayMobileNavbar function when 
    resizing the window.
    */
    window.addEventListener("resize", displayMobileNavbar);

    // Call the displayMobileNavbar function to set the state with the initial value.
    displayMobileNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", displayMobileNavbar);
  }, []);

  const renderNavbarItems = routes.map(({ name, href, route }) => (
    <TFTNavbarDropdown
      key={name}
      name={name}
      href={href}
      route={route}
      light={light}
    />
  ));

  return (
    <Container sx={sticky ? {
      position: "sticky",
      top: 0,
      zIndex: 10,
    } : null}>
      <TFTBox
        py={0}
        px={0}
        my={0}
        mx={0}
        width={"100%"}
        shadow={transparent ? "none" : "lg"}
        color={light ? "white" : "dark"}
        position={relative ? "relative" : "absolute"}
        left={0}
        zIndex={3}
        sx={
          ({ palette: { transparent: transparentColor }, functions: { rgba, linearGradient } }) => ({
            background: transparent ? transparentColor.main :
              {
                xs: rgba("#0C0C0C", 0.6),
                lg: linearGradient(rgba("#001A2F", 0.8), rgba("#001A2F", 0.2), 180),
              }
          })
        }
      >
        <TFTBox display="flex" justifyContent="space-between" alignItems="center">
          {
            brand &&
            <TFTBox
              component={Link}
              to="/"
              lineHeight={1}
              py={transparent ? 1.5 : 0.75}
              pl={relative || transparent ? 0 : { xs: 0, lg: 1 }}
            >
              <img src={brand.image} height={brand.height ? brand.height : "auto"} width="auto" />
            </TFTBox>
          }

          <TFTBox
            display="flex"
            alignItems="center"
          >
            <TFTBox
              color="inherit"
              display={{ xs: "none", lg: "flex" }}
              ml={center ? "auto" : 0}
              mr={center ? "auto" : 0}
              border={{ xs: "none", lg: "2px solid #29455C" }}
              borderRadius="40px"
              height="100%"
              fontSize="md"
              sx={sticky ? {
                background: "rgba(0, 0, 0, 0.4)",
                backdropFilter: "blur(2px)",
              } : null}
            >
              {renderNavbarItems}
            </TFTBox>

            <TFTAlarmNotifier
              messages={notification}
            />

            <TFTLocaleSwitcher 
              initialLocale={i18n.locale}
              locales={locales}
              onLocaleChange={selectLocale}
            />

            {
              avatar &&
              <TFTProfileMenu
                image={avatar.image}
                height={avatar.height}
                handleClickProfile={avatar.handleClickProfile}
                handleClickSetting={avatar.handleClickSetting}
                handleClickLogout={avatar.handleClickLogout}
              />
            }

            <TFTBox
              display={{ xs: "inline-block", lg: "none" }}
              lineHeight={0}
              py={1.5}
              pl={1.5}
              fontSize="36px"
              color={"white"}
              sx={{ cursor: "pointer" }}
              onClick={openMobileNavbar}
            >
              <Icon>{mobileNavbar ? "close" : "menu"}</Icon>
            </TFTBox>
          </TFTBox>
        </TFTBox>
        <TFTBox
          bgColor={transparent ? "white" : "transparent"}
          shadow={transparent ? "lg" : "none"}
          borderRadius="xl"
          px={transparent ? 2 : 0}
        >
          {mobileView && <TFTNavbarMobile routes={routes} open={mobileNavbar} />}
        </TFTBox>
      </TFTBox>
    </Container >
  );
}

// Setting default values for the props of TFTNavbar
TFTNavbar.defaultProps = {
  transparent: false,
  light: true,
  action: false,
  sticky: false,
  relative: false,
  center: false,
};

// Typechecking props for the TFTNavbar
TFTNavbar.propTypes = {
  brand: PropTypes.any,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  avatar: PropTypes.any,
  notification: PropTypes.any,
  transparent: PropTypes.bool,
  light: PropTypes.bool,
  action: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      type: PropTypes.oneOf(["external", "internal", "social"]).isRequired,
      route: PropTypes.string.isRequired,
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
        "light",
        "default",
        "white",
      ]),
      label: PropTypes.string.isRequired,
    }),
  ]),
  sticky: PropTypes.bool,
  relative: PropTypes.bool,
  center: PropTypes.bool,
};
