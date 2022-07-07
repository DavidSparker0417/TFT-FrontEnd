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
import { styled } from "@mui/material/styles";
import TFTBox from "components/TFTBox";
import IconButton from "@mui/material/IconButton";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Popper from "@mui/material/Popper";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

// assets
import USIcon from "assets/images/flags/united-kingdom.svg";
import FRIcon from "assets/images/flags/france.svg";
import DEIcon from "assets/images/flags/germany.svg";
import ESIcon from "assets/images/flags/spain.svg";
import ITIcon from "assets/images/flags/italy.svg";
import ZHIcon from "assets/images/flags/china.svg";
// import PLIcon from "assets/images/flags/poland.svg";
import RUIcon from "assets/images/flags/russia.svg";
import ELIcon from "assets/images/flags/greece.svg";
import KOIcon from "assets/images/flags/korea.svg";
import IDIcon from "assets/images/flags/indonesia.svg";

const localeItems = {
  en: {
    icon: USIcon,
    text: "English",
  },
  fr: {
    icon: FRIcon,
    text: "Français",
  },
  de: {
    icon: DEIcon,
    text: "Deutsch",
  },
  es: {
    icon: ESIcon,
    text: "Español",
  },
  it: {
    icon: ITIcon,
    text: "Italiano",
  },
  zh: {
    icon: ZHIcon,
    text: "中文",
  },
  ko: {
    icon: KOIcon,
    text: "한국어",
  },
  // pl: {
  //   icon: PLIcon,
  //   text: "Polski",
  // },
  ru: {
    icon: RUIcon,
    text: "Русский",
  },
  el: {
    icon: ELIcon,
    text: "Ελληνικά",
  },
  id: {
    icon: IDIcon,
    text: "Indonesian",
  },
};

export default function TFTLocaleSwitcher(props) {
  const { initialLocale, locales, onLocaleChange } = props;
  const [openMenu, setOpenMenu] = React.useState(null);
  const [activeLocale, setActiveLocale] = React.useState("en");

  const StyledItemText = styled(ListItemText)({
    color: "white",
    paddingLeft: "8px",
  });

  React.useEffect(() => {
    if (initialLocale)
      setActiveLocale(initialLocale);
  }, []);

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

  const handleClickItem = (value) => () => {
    setActiveLocale(value);
    onLocaleChange(value);
    handleCloseMenu();
  }

  const menuItems = () => {
    return locales?.map((locale, index) => {
      const item = localeItems[locale.locale];
      return (
        <MenuItem
          key={`locale-menu-item-${index}`}
          onClick={handleClickItem(locale.locale)}
        >
          <ListItemIcon>
            <img src={item.icon} width="24px" height="24px" />
          </ListItemIcon>
          <StyledItemText>{item.text}</StyledItemText>
        </MenuItem>
      );
    });
  };

  return (
    <div>
      <IconButton
        aria-owns={openMenu ? "locale-menu-list" : null}
        aria-haspopup="true"
        onClick={handleClickMenu}
        pl={1}
        sx={{
          height: "32px",
          width: "32px"
        }}
      >
        <img src={localeItems[activeLocale].icon} width="32px" height="32px" />
      </IconButton>
      <Popper
        open={Boolean(openMenu)}
        anchorEl={openMenu}
        transition
        disablePortal
        placement="bottom"
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
            id="locale-menu-list"
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
                  {menuItems()}
                </MenuList>
              </ClickAwayListener>
            </TFTBox>
          </Grow>
        )}
      </Popper>
    </div>
  );
}

TFTLocaleSwitcher.propTypes = {
  initialLocale: PropTypes.string,
  locales: PropTypes.array,
  onLocaleChange: PropTypes.func,
};
