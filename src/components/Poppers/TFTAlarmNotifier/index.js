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

// mui components
import { styled } from "@mui/material/styles";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Popper from "@mui/material/Popper";
import Grow from "@mui/material/Grow";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import NotificationsIcon from "@mui/icons-material/Notifications";

// TFTWebkit components
import TFTBox from "components/TFTBox";
import TFTTypography from "components/TFTTypography";

export default function TFTAlarmNotifier({ messages }) {
  const [openNotification, setOpenNotification] = React.useState(null);
  const handleClickNotification = (event) => {
    if (openNotification && openNotification.contains(event.target)) {
      setOpenNotification(null);
    } else {
      setOpenNotification(event.currentTarget);
    }
  };

  const handleCloseNotification = () => {
    setOpenNotification(null);
  }

  const TextNotification = styled(TFTTypography)({
    borderRadius: "10px",
    fontSize: "10px",
    height: "16px",
    minWidth: "16px",
    textAlign: "center",
    color: "white",
    background: "red",
    top: "5px",
    right: "5px",
    position: "absolute",
    verticalAlign: "middle",
  });

  return (
    <div>
      <IconButton
        aria-owns={openNotification ? "notification-menu-list" : null}
        aria-haspopup="true"
        onClick={handleClickNotification}
        sx={{ fontSize: "32px" }}
        pl={2}
      >
        <NotificationsIcon color="white" />
        {messages && messages.length > 0 &&
          <TextNotification>{messages.length}</TextNotification>}
      </IconButton>
      <Popper
        open={Boolean(openNotification)}
        anchorEl={openNotification}
        transition
        disablePortal
        placement="bottom"
        sx={{
          ...(!openNotification
            ? {
              pointerEvents: "none",
              display: "none",
            } : {}),
        }}
      >
        {({ TransitionProps }) => (
          <Grow
            {...TransitionProps}
            id="notification-menu-list"
            style={{ transformOrigin: "0 0 0" }}
          >
            <TFTBox
              sx={{
                background: "rgba(0, 30, 59, 0.7)",
                backdropFilter: "blur(4px)",
              }}
            >
              <ClickAwayListener onClickAway={handleCloseNotification}>
                <MenuList role="menu">
                  {messages?.map((message, index) => (
                    <MenuItem
                      key={`notification-menu-item-${index}`}
                      onClick={handleCloseNotification}
                      sx={{
                        fontSize: "16px",
                        color: "deeppink",
                      }}
                    >
                      {message}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </TFTBox>
          </Grow>
        )}
      </Popper>
    </div>
  );
}

TFTAlarmNotifier.propTypes = {
  messages: PropTypes.array,
};
