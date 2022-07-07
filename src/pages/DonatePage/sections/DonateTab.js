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

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Trans } from "@lingui/macro";
import QRCode from "react-qr-code";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { TabsUnstyled } from "@mui/base";
import { NavigateNext } from "@mui/icons-material";
import { Grid } from "@mui/material";

import TFTButton from "components/TFTButton";
import TFTTypography from "components/TFTTypography";
import TFTBox from "components/TFTBox";

import iconItoa from "assets/images/brands/iota.svg";
import iconEther from "assets/images/brands/ether.webp";
import iconBtc from "assets/images/brands/bitcoin.svg";

import { Tab, TabPanel, TabsList } from "./Styled";

const PanelContent = ({ address }) => {
  const [isCopied, setIsCopied] = useState(false);

  function onCopyAddress() {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  }

  return (
    <Grid container width="100%" justifyContent="space-around" alignItems="center">
      <Grid item>
        <TFTTypography
          mb={2}
          p={1}
          width="fit-content"
          variant="body2"
          fontSize="15px"
          sx={{
            letterSpacing: "0.8px",
            borderRadius: "1rem",
            border: `solid 2px #254158`,
            wordBreak: "break-all"
          }}
        >
          {address}
        </TFTTypography>
        <Grid container alignItems="center" mb={"1.5rem"}>
          <CopyToClipboard text={address} onCopy={onCopyAddress}>
            <TFTButton
              color="warning"
              sx={{
                padding: "0.2rem 1.2rem 0.2rem 1.2rem",
                borderRadius: "1.5rem"
              }}
            >
              <TFTTypography variant="body2" fontWeight="bold">
                <Trans>Copy Code</Trans>
              </TFTTypography>
              <NavigateNext sx={{ width: "40px", height: "40px" }} />
            </TFTButton>
          </CopyToClipboard>
          {
            isCopied &&
            <TFTTypography variant="body2" width="fit-content" ml={2}>
              <Trans>Copied!</Trans>
            </TFTTypography>
          }
        </Grid>
      </Grid>
      <Grid item sx={{ justifyContent: "center" }}>
        <QRCode value={address} />
      </Grid>
    </Grid>
  )
}

const TextWithIcon = ({ text, icon }) => (
  <>
    <TFTTypography variant="body2" width="60%" fontSize="1.1rem">
      {text}
    </TFTTypography>
    <TFTBox component="img" src={icon} height="42px" />
  </>
)
export default function DonateTab() {
  return (
    <TabsUnstyled component="div" defaultValue={0} style={{ marginTop: "2rem", display: "flex", flexDirection: "column" }}>
      <TabsList>
        <Tab sx={{ zIndex: "3" }}>
          <TextWithIcon text="Iota" icon={iconItoa} />
        </Tab>
        <Tab sx={{ marginLeft: "-1.5rem", paddingLeft: "32px", zIndex: "2" }}>
          <TextWithIcon text={`ETH,\nERC,etc`} icon={iconEther} />
        </Tab>
        <Tab sx={{ marginLeft: "-1.5rem", paddingLeft: "32px", zIndex: "1" }}>
          <TextWithIcon text="BTC" icon={iconBtc} />
        </Tab>
      </TabsList>
      <TabPanel value={0}>
        <PanelContent address="itoa1qpe4wwxmea8nqzafrp4q3lgnj2xycr5j9awxOhnqhe6pytw0zc0vycxcqrk" />
      </TabPanel>
      <TabPanel value={1}>
        <PanelContent address="0xFf39c23AfBb26314e12c43a191dE16213f064B4d" />
      </TabPanel>
      <TabPanel value={2}>
        <PanelContent address="38eSxYimwaadHFPaL1Ea8XC8sgqHj5G3g1" />
      </TabPanel>
    </TabsUnstyled>
  );
}

TextWithIcon.defaultProps = {
  text: "",
};

TextWithIcon.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.any
};

PanelContent.defaultProps = {
  address: ""
};

PanelContent.propTypes = {
  address: PropTypes.string
};
