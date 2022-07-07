/**
 **************************************************************
 * The Fans Together Website - v1.0.0
 **************************************************************
 * 
 * Product Page: 
 * Copyright 2022 @TFTTeam (https://www.tft-dev-team.com)
 * 
 * Coded by Telecrypto
 * 
 **************************************************************
 */

import React from "react";

import { Trans } from "@lingui/macro";
import { i18n } from "@lingui/core";

// @mui components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

// TFTWebkit components
import TFTBox from "components/TFTBox";
import TFTTypography from "components/TFTTypography";
import TFTPdfViewer from "components/TFTPdfViewer";
import DefNavBar from "pages/components/DefNavBar";
import TemplatePage from "pages/Templates";

import breakpoints from "assets/theme/base/breakpoints";
import bgImage from "assets/images/whitepaper/background.webp";
import iconDoc from "assets/images/symbol/doc.svg"
import whitepaper_en from "assets/pdf/whitepaper.pdf";
import whitepaper_el from "assets/pdf/whitepaper_el.pdf";

const {
  values: { sm, md, lg, xl, xxl },
} = breakpoints;

const MD = `@media (min-width: ${md}px)`;
const LG = `@media (min-width: ${lg}px)`;

const Title = styled(TFTTypography)({
  padding: "8px",
  fontSize: "32px",
  [MD]: {
    fontSize: "40px",
  },
  [LG]: {
    fontSize: "50px",
  },
  fontWeight: "bold",
  lineHeight: 1.3,
});

const DownloadButton = styled("a")({
  display: "block",
  borderRadius: "12%",
  border: "2px rgb(41,69,92) solid",
  marginBottom: "32px",
  width: "180px",
  height: "fit-content",
  padding: "24px",

  [LG]: {
    width: "280px",
    padding: "32px",
  },

  "&:hover": {
    opacity: 0.8,
  },
});

export default function WhitePaper() {
  const whitepaperByLocale = () => {
    const locale = i18n.locale;
    switch (locale) {
      case "el":
        return whitepaper_el;
      default:
        return whitepaper_en;
    }
  };

  const whitepaper = whitepaperByLocale();
  return (
    <>
      <DefNavBar />
      <Container>
        <TemplatePage
          top="0"
          height="fit-content"
          banner={{
            background: `linear-gradient(360deg,rgba(0,26,47,0.4),rgba(0,26,47,0.6) 70%), url(${bgImage})`,
            backgroundPosition: "center top!important",
            height: {
              xs: "196px",
              sm: `${sm / 2}px`,
              md: `${md / 2}px`,
              lg: `${lg / 2}px`,
              xl: `${xl / 2}px`,
              xxl: `${xxl / 2}px`,
            },
            bottomSmooth: true,
          }}
        >
          <Grid container
            // height="100%"
            spacing={1}
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Grid item xs={12}>
              <TFTBox width="100%" height="20vh" minHeight="120px">
              </TFTBox>
              <Title>
                <Trans>Whitepaper</Trans>
              </Title>
            </Grid>

            <Grid item xs={12}>
              <TFTPdfViewer file={whitepaper} />
            </Grid>

            <Grid container justifyContent="center">
              <DownloadButton
                href={whitepaper}
                download
              >
                <TFTTypography pb={1}
                  variant="h4"
                  fontSize={{ xs: "20px", lg: "34px" }}
                  sx={{ color: "#fff" }}>
                  <Trans>Click Here</Trans>
                </TFTTypography>
                <TFTTypography
                  variant="body2"
                  pb={3}
                  fontSize={{ xs: "14px", lg: "18px" }}
                  lineHeight={1.25}
                  sx={{ color: "#fff" }}>
                  <Trans id="whitepaper.download.desc">
                    To download our<br />
                    Whitepaper
                  </Trans>
                </TFTTypography>
                <img src={iconDoc} width="30%" />
              </DownloadButton>
            </Grid>
          </Grid>
        </TemplatePage>
      </Container>
    </>
  );
}
