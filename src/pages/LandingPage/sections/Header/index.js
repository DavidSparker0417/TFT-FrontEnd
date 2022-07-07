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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

import { Trans } from "@lingui/macro"

// SwiperJS react components
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectFade,
} from "swiper";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "assets/css/swiper.css";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import TFTBox from "components/TFTBox";
import TFTButton from "components/TFTButton";

import {
  StyledBox,
  StyledGrid,
  // SliderBox,
  // SliderText1,
} from "./Styled";

import banner1 from "assets/images/banner/banner1.webp";
import banner2 from "assets/images/banner/banner2.webp";
import banner3 from "assets/images/banner/banner3.webp";

export default function Header() {
  return (
    <Container sx={{ position: "relative" }}>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        spaceBetween={30}
        slidesPerView={1}
        navigation={false}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}"><div></div>${bannerItems[index].caption}</span>`;
          },
        }}
        modules={[Autoplay, Navigation, Pagination, EffectFade,]}
        loop
      >
        {
          bannerItems.map((item, index) => {
            return (
              <SwiperSlide key={`banner-${index}`} >
                <Banner Image={item.image} Link={item.link} />
              </SwiperSlide>
            );
          })
        }
      </Swiper>
      {/* <SliderBox>
        <SliderText1 variant="span">
          &nbsp;&nbsp;&nbsp;&nbsp;12/3/2022 15:23 IOTA SALE - TFT MIDAS BUYER: 0x333 SELLER 0x888
          &nbsp;&nbsp;&nbsp;&nbsp;8/3/2022 11:45 - IOTA SALE -TFT MIDAS BUYER: 0x104 SELLER:0x455
          &nbsp;&nbsp;&nbsp;&nbsp;8/3/2022 12:47 - IOTA SALE -TFT MIDAS BUYER: 0x222 SELLER:0x876
          &nbsp;&nbsp;&nbsp;&nbsp;5/3/2022 18:45 - IOTA SALE -TFT MIDAS BUYER: 0x434 SELLER:0x271
        </SliderText1>
      </SliderBox> */}
      <div className="swiper-pagination" />
      {/* <TFTBox
        width="100%"
        height="2vh" /> */}
      <div></div>
    </Container>
  );
}

function Banner({ Image, Link }) {
  return (
    <StyledBox
      height={{ xs: "50vh", md: "60vh", lg: "70vh", }}
      width="100%"
      sx={{
        backgroundImage: `url(${Image})`
      }}
    >
      <TFTBox
        height="fit-content"
        top="0%"
        lef="3%"
        sx={{
          position: "relative",
        }}
      >
        {/* <img src={logo} width="100%"/> */}
      </TFTBox>

      <TFTBox
        width={{ xs: "80%", md: "70%", lg: "60%", }}
        height="fit-content"
        top="0"
        left="3%"
        sx={{
          position: "relative",
        }}
      >
      </TFTBox>

      <StyledGrid
        container
        sx={{
          width: {
            xxl: "40%",
            xl: "50%",
            lg: "60%",
            md: "80%",
          },
        }}>
        <Grid item xs={12} md={6} p={1}>
          <TFTButton
            color="warning"
            href={Link ? Link : ""}
            sx={{
              borderRadius: "8px",
              fontStyle: "Normal",
              fontSize: {
                xs: "14px",
                md: "16px",
                lg: "18px",
              },
              letterSpacing: "1.5px",
            }}>
            <Trans>Find out more</Trans>
          </TFTButton>
        </Grid>
      </StyledGrid>
    </StyledBox>
  )
}

Banner.propTypes = {
  Image: PropTypes.string.isRequired,
  Link: PropTypes.string,
};

const bannerItems = [
  {
    image: banner1,
    caption: "The Fans Together",
    link: "/about",
  },
  {
    image: banner2,
    caption: "TESTNETFC",
    link: "/news/TESTNETFC-1"
  },
  {
    image: banner3,
    caption: "Discord",
    link: "/news/How-to-get-Involved-Discord-1",
  }
];
