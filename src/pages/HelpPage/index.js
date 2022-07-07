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
import { Link } from "react-router-dom";
import { t, Trans } from "@lingui/macro";

// @mui material components
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// TFT components
import TFTBox from "components/TFTBox";
import TFTTypography from "components/TFTTypography";
import TFTSearchBox from "components/TFTInput/TFTSearchBox";

// pages
import DefNavBar from "pages/components/DefNavBar";
import TemplatePage from "pages/Templates";

// asset
import bgImage from "assets/images/help/background.webp";
import contactIcon from "assets/images/help/contact.png";
import faqIcon from "assets/images/help/faq.png";
import breakpoints from "assets/theme/base/breakpoints";


const {
  values: { sm, md, lg, xl, xxl },
} = breakpoints;

const MD = `@media (min-width: ${md}px)`;
const LG = `@media (min-width: ${lg}px)`;

export default function HelpPage() {
  const Title = styled(TFTTypography)({
    padding: "8px",
    fontSize: "40px",
    [MD]: {
      fontSize: "48px",
    },
    [LG]: {
      fontSize: "60px",
    },
    fontWeight: "bold",
    lineHeight: 1.3,
  });

  const Header = styled(TFTTypography)({
    padding: "28px 4px 24px 4px",
    fontSize: "28px",
    [MD]: {
      fontSize: "34px",
    },
    [LG]: {
      fontSize: "42px",
    },
    fontWeight: "bold",
    lineHeight: 1.2,
  });

  const Content = styled(TFTTypography)({
    padding: "0px",
    paddingBottom: "16px",
    fontSize: "14px",
    [MD]: {
      fontSize: "18px",
    },
    [LG]: {
      fontSize: "20px",
    },
    fontWeight: "normal",
    lineHeight: 1.2,
    // whiteSpace: "pre-wrap",
  });

  const HelpBox = styled(TFTBox)({
    padding: "8px",
    borderRadius: "16px",
    backgroundColor: "rgba(0, 32, 59, 0.6)",
    border: "2px solid #29455C",
    width: "100%",
    height: "100%",
    display: "block",
  });

  return (
    <>
      <DefNavBar />
      <Container>
        <TemplatePage
          top="0"
          height="fit-content"
          // minHeight="calc(100vh - 216px)"
          banner={{
            background: `linear-gradient(360deg,rgba(0,26,47,0.4),rgba(0,26,47,0.6) 70%), url(${bgImage})`,
            backgroundPosition: "center top!important",
            height: {
              xs: "160px",
              sm: `${(sm - 84) / 2}px`,
              md: `${(md - 96) / 2}px`,
              lg: `${(lg - 80) / 2}px`,
              xl: `${(xl - 108) / 2}px`,
              xxl: `${(xxl - 128) / 2}px`,
            },
            topSmooth: true,
            bottomSmooth: true,
          }}
        >
          <Grid container
            // spacing={1}
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            mb={4}
          >
            <Grid item xs={11} pb={3}>
              <TFTBox width="100%" height="25vh">
              </TFTBox>
              <Title>
                <Trans>Help</Trans>
              </Title>
              <TFTSearchBox />
            </Grid>
            <Grid container
              spacing={1}
              mt={2}
              justifyContent="space-evenly"
              alignItems="center"
              textAlign="center"
            >
              <Grid item xs={6} md={5} lg={4} xxl={3}>
                <HelpBox
                  component={Link}
                  to="/contact"
                  height="100%"
                >
                  <Header>
                    <Trans>Contact</Trans>
                  </Header>
                  <Content>
                    {t({ id: "help.contact.desc", message: `Haven't found what you need in our FAQ?` })}
                  </Content>
                  <TFTBox
                    component="img"
                    bgColor="transparent"
                    src={contactIcon}
                    width="30%"
                    pt={2} pb={3} />
                </HelpBox>
              </Grid>

              <Grid item xs={6} md={5} lg={4} xxl={3}>
                <HelpBox
                  component={Link}
                  to="/faq"
                  height="100%"
                >
                  <Header>
                    <Trans>FAQ</Trans>
                  </Header>
                  <Content>
                    <Trans>Check out our frequently asked questions</Trans>
                  </Content>
                  <TFTBox
                    component="img"
                    bgColor="transparent"
                    src={faqIcon}
                    width="30%"
                    pt={2} pb={3} />
                </HelpBox>
              </Grid>
            </Grid>
          </Grid>
        </TemplatePage>
      </Container>
    </>
  );
}
