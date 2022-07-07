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

// @mui material components
import { styled } from "@mui/material/styles";
import { keyframes } from "@mui/system";

const hop = keyframes`
  0% {
    transform: rotate(8deg) translateY(-2px);
  }
  30% {
    transform: rotate(-14deg) translateY(-5px);
  }
  65% {
    transform: rotate(7deg) translateY(2px);
  }
  100% {
    transform: rotate(0deg) translateY(-2px);
  }
`;

const click = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.96);
  }
  100% {
    transform: scale(1);
  }
`;

const boom = keyframes`
  0% {
    transform: translateX(-25px);
    opacity: 1;
  }
  100% {
    transform: translateX(50px);
    opacity: 0;
  }
`;

const ParticlesCount = 10;

export const LikeButtonWrapper = styled("button")
  (({ theme, ownerState }) => {
    const { palette, functions } = theme;
    const { liked, clicked } = ownerState;
    const { white, dark, blue } = palette;
    const { rgba } = functions;

    return {
      position: "relative",
      display: "grid",
      placeItems: "center",
      border: "none",
      cursor: "pointer",
      padding: "8px",
      color: white.main,
      fontSize: "16px",
      background: "transparent",
      "&:before": {
        content: '""',
        zIndex: 1,
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        willChange: "background-color",
        transition: "background-color 0.3s, transform 0.3s",
        boxShadow: `0 0 10px ${rgba(dark.main, 0.5)}`,
        borderRadius: "8px",
        backgroundColor: liked ? blue.main : dark.main,
        ...(clicked && {
          animation: `${click} 300ms`,
        }),
      },

      ...(!liked && {
        "&:hover svg": {
          transform: "translateY(-2px) rotate(8deg)",
          "#thumb-end": {
            transform: "rotate(45deg) translate(5px, -45px)",
          },
        },
      }),

      "svg": {
        width: "22px",
        height: "22px",
        marginRight: "8px",
        transform: "translateY(-2px)",
        transition: "transform 0.2s",
        ...(liked && {
          animation: `${hop} 500ms`,
        }),
        "#thumb-end": {
          transition: "transform 0.2s",
        },
      },
    };
  });

export const LikeButton = styled("div")({
  display: "flex",
  alignItems: "center",
  zIndex: 1,
  transform: "translateX(3px)",
});

export const LikeButtonParticles = styled("div")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
});

export const LikeButtonParticleRotates = styled("div")({
  position: "absolute",
  ...(Array.from(Array(ParticlesCount)).map((_, i) => ({
    [`&:nth-of-type(${i + 1})`]: {
      ...(i < 4 || i == 9
        ? {
          right: i == 2 ? "33%" : i == 3 ? "66%" : "0",
        } : {
          left: i == 7 ? "33%" : i == 8 ? "66%" : "0",
        }),
      ...(i == 0 ? { top: "50%" }
        : i < 5 ? { bottom: 0 }
          : i == 5 ? { bottom: "50%" }
            : { top: 0 }),
      transform: `rotate(${(360 / ParticlesCount) * i + 1}deg)`,
    }
  })).reduce((obj, cur) => ({ ...obj, ...cur }), {})),
});

export const LikeButtonParticleTick = styled("div")(({ theme }) => ({
  position: "absolute",
  zIndex: -1,
  width: "10px",
  height: "1px",
  background: theme.palette.blue.main,
  animation: `${boom} 500ms`,
  transform: "translateX(-25px)",
}));

export const LikeButtonSuffix = styled("span")(({ liked }) => ({
  transition: "opacity 300ms, transform 300ms",
  ...(liked
    ? {
      opacity: 1,
      transform: "translateX(0)",
    } : {
      opacity: 0,
      transform: "translateX(15px)",
    }),
}));
