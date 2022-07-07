/**
 **************************************************************
 * The Fans Together Website - v1.0.0
 **************************************************************
 * 
 * Product Page: 
 * Copyright 2022 @TFTTeam (https://www.tft-dev-team.com)
 * 
 * Coded by Telecrypto@OKI
 * Coded by DavidSparker
 * 
 **************************************************************
 */

import React from "react";
import PropTypes from "prop-types";
import { /*t, */Trans } from "@lingui/macro";
// @mui material components
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

import TFTTypography from "components/TFTTypography";
import TFTBox from "components/TFTBox";
import TFTReadMore from "../../../components/TFTReadMore"

import quoteImg from "assets/images/about/quote.png";
import bannerImg from "assets/images/about/banner.webp";
import titleEffect from "assets/images/about/title-effect.webp";
// import introEffect from "assets/images/about/intro-effect.webp";

const HeaderBG = styled(TFTBox)({
  position: "relative",
  width: "100%",
  backgroundSize: "100%!important",
  backgroundPosition: "center top",
  background: `url(${bannerImg})`,
  backgroundRepeat: "no-repeat",
  "&:after": {
    content: '""',
    position: "absolute",
    right: "0",
    width: "10%",
    height: "100%",
    background: "linear-gradient(90deg,transparent,rgba(0,26,47,1) 80%)",
  },
});

const LinkText = ({link, children}) => (<>
  <TFTTypography 
    component="a" 
    href={link} 
    target="_blank" sx={{color: "lightblue"}}
    fontSize="inherit"
  >
    {children}
  </TFTTypography>
</>);

LinkText.defaultProps = {
  children: undefined,
  link: "#",
};

LinkText.propTypes = {
  children: PropTypes.node,
  link: PropTypes.string
};

const BoldText = ({children}) => {
  return (
    <TFTTypography component="span" fontWeight="bold" fontSize="inherit">
      {children}
    </TFTTypography>
  )
}

BoldText.defaultProps = {
  children: undefined,
};

BoldText.propTypes = {
  children: PropTypes.node,
};

export default function AboutUs() {
  // const aboutText = t({
  //   id: "about.text",
  //   message: 
    const aboutText = <>
      <TFTTypography fontWeight="bold" fontSize="28px">Our ambition</TFTTypography>
      The publication <LinkText link="https://www.gov.uk/government/publications/fan-led-review-of-football-governance-securing-the-games-future/fan-led-review-of-football-governance-securing-the-games-future">‘Fan-led review of football governance: securing the game’s future’</LinkText> published 
      in November 2021 by Tracey Crouch, Chair of the Independent Fan-Led Review of Football Governance, 
      elaborates a variety of shortcomings faced by modern football in the UK. For many years, 
      fans have been marginalised in the governance of their clubs. <br />
      <br />
      Tracey emphasises, ‘Football is nothing without its fans’. 
      The Fans Together (TFT) completely agrees with this statement and 
      reinforces the much-needed optimisations on governance and increased 
      fan closeness as highlighted in the report. <br/>
      <br/>
      Globally, the German 50+1 model is recognised as a robust way to 
      protect fans’ interests through ownership and a controlling stake. 
      We are some way off this model becoming prevalent in the UK, 
      but we believe a move towards this model in the near future is crucial. 
      <BoldText> TFT’s mission is to bring large scale, widespread fan ownership to reality.<br/>
      </BoldText>
      <br/>
      Our initiative, The Fans Together has evolved over the last four years 
      with the question of a reasonable ownership structure at the forefront 
      of our minds. It’s obvious that any interaction and ownership need to 
      be open and accountable for the fans and that they should have the 
      freedom to enter or leave this form of ownership as they please. 
      Further, the entry point should be flexible to suit all pockets. 
      <BoldText> Our main goal is to achieve real fan ownership, available to all.
      </BoldText><br/>
      <br/>
      <TFTTypography fontWeight="bold" fontSize="28px">How this works</TFTTypography>
      Fan ownership is achieved by integrating digital ledger technology, 
      a record-keeping system that maintains a cryptocurrency balance, 
      into our easy-to-use TFT app. Our base technology is based on the 
      protocol of the open-source IOTA Foundation, based in Germany. 
      We have been collaborating with IOTA for over a year  to ensure 
      interactions between fans and clubs 
      (e.g. voting on various club-related topics) are feeless and 
      frictionless with instant, visible online records. 
      Importantly, these votes will directly impact boardroom activities. 
      Our IOTA system is simply the mechanism for fans to engage with their 
      club.<br/>
      <br/>
      The Fans Together is a Decentralised Autonomous Organisation (DAO). 
      Token holders are the owners of all our club assets and can interact 
      with any of the owned clubs. As a benefit, fans are working together 
      to build the fortunes of their clubs.<br/>
      <br/>
      The tokens will be available on an easy-to-access trading platform 
      within our app, ensuring liquidity and transparency. 
      The traditional model of share ownership as seen in many football clubs 
      tends to be very illiquid for fans. Establishing and maintaining listings 
      is very expensive. Our approach guarantees flexibility, low cost entry 
      and freedom for fans to withdraw funds whenever they like. 
      <BoldText> This is what real fan ownership looks like –affordable, transparent and effective.
      </BoldText><br/>
      <br/>
      We have already acquired equity in FC EPISKOPI, 
      a club in Greece Super League 2 in Crete, and have started working 
      closely with the club to demonstrate the benefits of fan ownership.<br/>
      <br/>
      It is important to engage fans in different ways – in person and 
      digitally, to give them a voice and power. This is best illustrated 
      in Germany where clubs are  generally very well run and efficiently 
      commercialised to increase the club’s revenues. We want to leverage 
      these lessons, bringing the fan experience to a new level. 
      Most importantly,
      <BoldText> all club revenues and profits in TFT clubs will be 
      reinvested into the community and the club.</BoldText> 
      This means, fans will 
      control the future of their clubs and they can be sure the money 
      they spend is reinvested for its benefit.
      </>;

  return (
    <>
      <HeaderBG
        height={{ xs: "300px", sm: "400px", md: "500px", lg: "600px", xl: "700px", xxl: "800px" }}
      >
        <TFTBox
          position="absolute"
          bottom="5%"
          left="0"
          width="100%"
          height="fit-content"
        >
          <TFTTypography
            variant="h1"
            height="auto"
            fontSize={{
              xs: "24px", sm: "32px", md: "40px", lg: "50px", xl: "60px", xxl: "72px",
            }}
          >
            <Trans>About</Trans>
          </TFTTypography>
          <TFTTypography
            pl={3}
            variant="h1"
            textAlign="center"
            fontSize={{
              xs: "24px", sm: "32px", md: "40px", lg: "50px", xl: "60px", xxl: "72px",
            }}
          >
            THE FANS TOGETHER
          </TFTTypography>
        </TFTBox>
      </HeaderBG>
      <Grid
        container
        direction="column"
        sx={{
          alignItems: "center",
          justifyContent: "end",
        }}
      >
        <TFTBox
          component="img"
          src={quoteImg}
          width={{
            xs: "20px", sm: "24px", md: "32px", lg: "36px", xl: "40px", xxl: "48px"
          }}
          mr={"30%"}
        />
      </Grid>
      <TFTBox
        height="fit-content"
        mb={5}
        textAlign="center"
        display="flex"
        position="relative"
        justifyContent="center"
        alignItems="center"
      // sx={{ display: "flex", position: "relative", justifyContent: "center", alignItems: "center" }}
      >
        <TFTBox
          component="img"
          width="100%"
          height="100%"
          src={titleEffect}
          zIndex="1"
        />
        <TFTTypography
          variant="h1"
          textAlign="center"
          position="absolute"
          fontSize={{
            xs: "24px", sm: "32px", md: "40px", lg: "50px", xl: "60px", xxl: "72px",
          }}
        >
          <Trans>COMMUNITY</Trans>
        </TFTTypography>
      </TFTBox>
      <TFTReadMore
        text={aboutText}
        // img={`url(${introEffect})`}
      />
    </>
  )
}
