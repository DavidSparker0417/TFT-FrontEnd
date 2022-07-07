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

import { Trans } from "@lingui/macro";

// @mui material components
import { styled } from "@mui/material/styles";
import TFTBox from "components/TFTBox";
import IconButton from "@mui/material/IconButton";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Popper from "@mui/material/Popper";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

export default function TFTProfileMenu({
  image, height, handleClickProfile, handleClickSetting, handleClickLogout }) {
  const [openMenu, setOpenMenu] = React.useState(null);

  const handleClickMenu = (event) => {

    if (openMenu && openMenu.contains(event.target)) {
      setOpenMenu(null);
    } else {
      setOpenMenu(event.currentTarget);
    }
  };

  const handleCloseMenu = () => {
    setOpenMenu(null);
  };

  const StyledItemIcon = styled(ListItemIcon)({
    color: "white",
  });
  const StyledItemText = styled(ListItemText)({
    color: "white",
  });

  return (
    <div>
      <IconButton
        aria-owns={openMenu ? "profile-menu-list" : null}
        aria-haspopup="true"
        onClick={handleClickMenu}
        pl={1}
      >
        <img
          src={image}
          height={height ? height : "auto"}
          width={height ? height : "auto"}
          style={{
            maxWidth: "64px",
            maxHeight: "64px",
            borderRadius: "50%",
          }}
        />
      </IconButton>
      <Popper
        open={Boolean(openMenu)}
        anchorEl={openMenu}
        transition
        disablePortal
        placement="bottom-end"
        sx={{
          ...(!openMenu
            ? {
              pointerEvents: "none",
              display: "none",
            } : {}),
        }}
      >
        {({ TransitionProps }) => (
          <Grow
            {...TransitionProps}
            id="profile-menu-list"
            style={{ transformOrigin: "0 0 0" }}
          >
            <TFTBox
              sx={{
                background: "rgba(0, 30, 59, 0.7)",
                backdropFilter: "blur(4px)",
              }}
            >
              <ClickAwayListener onClickAway={handleCloseMenu}>
                <MenuList role="menu">
                  <MenuItem onClick={handleClickProfile}>
                    <StyledItemIcon>
                      <AccountBoxIcon fontSize="small" />
                    </StyledItemIcon>
                    <StyledItemText>
                      <Trans>Profile</Trans>
                    </StyledItemText>
                  </MenuItem>
                  <MenuItem onClick={handleClickSetting}>
                    <StyledItemIcon>
                      <SettingsIcon fontSize="small" />
                    </StyledItemIcon>
                    <StyledItemText>
                      <Trans>Setting</Trans>
                    </StyledItemText>
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleClickLogout}>
                    <StyledItemIcon>
                      <LogoutIcon fontSize="small" />
                    </StyledItemIcon>
                    <StyledItemText>
                      <Trans>Log out</Trans>
                    </StyledItemText>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </TFTBox>
          </Grow>
        )}
      </Popper>
    </div>
  );
}

TFTProfileMenu.propTypes = {
  image: PropTypes.any,
  height: PropTypes.any,
  handleClickProfile: PropTypes.func,
  handleClickSetting: PropTypes.func,
  handleClickLogout: PropTypes.func,
};
