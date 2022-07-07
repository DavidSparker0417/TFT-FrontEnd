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
import React, { useEffect, useState } from "react";
import { t, Trans } from "@lingui/macro";

// SwiperJS react components
import {
  // EffectCoverflow,
  Navigation,
} from "swiper";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "assets/css/swiper.css";

import TFTMemberCard from "components/Cards/TFTMemberCard";
import TFTTypography from "components/TFTTypography";

import breakpoints from "assets/theme/base/breakpoints";
import leftsvg from "assets/images/symbol/navigation/left-arrow-with-bg.svg";
import rightsvg from "assets/images/symbol/navigation/right-arrow-with-bg.svg";

export default function Team() {
  const [width, setWidth] = useState("360px");
  const [bundle, setBundle] = useState(3);
  const [space, setSpace] = useState(60);

  const memberList = [
    {
      name: "Izaac",
      photo: require("assets/images/team-member/izaac.webp"),
      role: t`Core Team`,
    },
    {
      name: "George",
      photo: require("assets/images/team-member/george.webp"),
      role: t`Core Team`,
    },
    {
      name: "Manisha",
      photo: require("assets/images/team-member/manisha.webp"),
      role: t`Core Team`,
    },
    {
      name: "Charlie",
      photo: require("assets/images/team-member/charlie.webp"),
      role: t`Core Team`,
    },
    {
      name: "Simon",
      photo: require("assets/images/team-member/simon.webp"),
      role: t`Core Team`,
    },
    {
      name: "Brittany",
      photo: require("assets/images/team-member/brittany.webp"),
      role: t`TFT Lead Designer and Creative`,
    },
    {
      name: "Dan",
      photo: require("assets/images/team-member/dan.webp"),
      role: t`Director of Partnerships NA`,
    },
    {
      name: "Gabriela",
      photo: require("assets/images/team-member/Gabriela.webp"),
      role: t`Director of Partnerships LatAm`,
    },
    {
      name: "Davide",
      photo: require("assets/images/team-member/davide.webp"),
      role: t`Spanish Football Expert, Football Analyst and Coach`,
    },
    {
      name: "Emmanuel",
      photo: require("assets/images/team-member/emmanuel.webp"),
      role: t`Head of TFT Nigeria`,
    },
    {
      name: "Yiannis",
      photo: require("assets/images/team-member/yiannis.webp"),
      role: t`Greek Football Specialist and Youth Development`,
    },
    {
      name: "Anxhelo",
      photo: require("assets/images/team-member/anxhelo.webp"),
      role: t`Fullstack Developer`,
    },
    {
      name: "David",
      photo: require("assets/images/team-member/david.webp"),
      role: t`Fullstack Developer`,
    },
  ];

  useEffect(() => {
    // A function that sets the display state for the TFTNavbarMobile.
    function displayMobileSlider() {
      if (window.innerWidth < breakpoints.values.sm) {
        const width = 218 - (~~((breakpoints.values.sm - window.innerWidth) / 2));
        setWidth(width.toString() + "px");
        setBundle(2);
        setSpace(20);
      } else if (window.innerWidth < breakpoints.values.md) {
        setWidth("203px");
        setBundle(2);
        setSpace(20);
      } else if (window.innerWidth < breakpoints.values.lg) {
        setWidth("172px");
        setBundle(3);
        setSpace(30);
      } else if (window.innerWidth < breakpoints.values.xl) {
        setWidth("220px");
        setBundle(3);
        setSpace(30);
      } else if (window.innerWidth < breakpoints.values.xxl) {
        setWidth("164px");
        setBundle(4);
        setSpace(60);
      } else {
        setWidth("210px");
        setBundle(4);
        setSpace(60);
      }
    }

    window.addEventListener("resize", displayMobileSlider);
    displayMobileSlider();
    return () => window.removeEventListener("resize", displayMobileSlider);
  }, []);

  return (
    <>
      <TFTTypography variant="h4">
        <Trans>The Team</Trans>
      </TFTTypography>
      <Swiper
        // centeredSlides={true}
        slidesPerView={bundle}
        spaceBetween={space}
        modules={[Navigation]}
        navigation={{
          prevEl: ".swiper-custom-button-prev",
          nextEl: ".swiper-custom-button-next"
        }}
      // loop
      >
        {
          memberList.map((item, index) => (
            <SwiperSlide key={`team-banner-${index}`} >
              <TFTMemberCard
                photo={item.photo}
                name={item.name}
                description={item.role}
                width={width}
                height={width}
              />
            </SwiperSlide>
          ))
        }
        <div className="swiper-custom-button-prev">
          <img src={leftsvg} height="48px" />
        </div>
        <div className="swiper-custom-button-next">
          <img src={rightsvg} height="48px" />
        </div>
      </Swiper>
    </>
  )
}
