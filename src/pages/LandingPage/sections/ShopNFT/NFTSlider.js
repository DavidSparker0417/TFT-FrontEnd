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
import PropTypes from "prop-types";

// SwiperJS react components
import {
  Navigation,
} from "swiper";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "assets/css/swiper.css";

import NFTBanner from "pages/components/NFTBanner";

export default function NFTSlider(props) {
  const { items } = props;

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      navigation={true}
      modules={[Navigation]}
    >
      {
        items.map((item, index) => (
          <SwiperSlide key={`banner-${index}`} >
            <NFTBanner
              Image={item.Image}
              Name={item.Name}
              Route={item.Link.internal}
              Details={item.Details}
              Style={{
                bannerHeight: { xs: "68vw", sm:"360px", md: "490px", lg: "600px", xl: "700px", xxl: "800px" },
                detailFontSize: { xs: "11px", sm:"15px", md: "20px", lg: "26px", xl: "30px", xxl: "36px" },
                titleFontSize: { xs: "16px", sm: "26px", md: "38px", lg: "50px", xl: "56px", xxl: "64px"},
                swiperBanner: true,
              }}
            />
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
}

// prototype checking
NFTSlider.propTypes = {
  items: PropTypes.array,
};
