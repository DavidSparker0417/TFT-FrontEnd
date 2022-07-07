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

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Collapse from "@mui/material/Collapse";

import TFTBox from "components/TFTBox";
import TFTNavbarDropdown from "components/TFTNavBar/NavbarDropdown";

export default function TFTNavbarMobile({ routes, open }) {
  return (
    <Collapse in={Boolean(open)} timeout="auto" unmountOnExit>
      <TFTBox width="100%" my={2} ml={0} sx={{ backdropFilter: "blur(4px)" }}>
        {routes.map(
          ({ name, icon, href, route }) => (
            <TFTNavbarDropdown
              key={name}
              name={name}
              icon={icon}
              href={href}
              route={route}
              light
            />
          )
        )}
      </TFTBox>
    </Collapse>
  );
}

// Typechecking props for the TFTNavbarMobile
TFTNavbarMobile.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
};
