/**
 **************************************************************
 * The Fans Together Website - v1.0.0
 **************************************************************
 * 
 * Product Page: 
 * Copyright 2022 @TFTTeam (https://www.tft-dev-team.com)
 * 
 * Coded by Telecrypto@OKI, DavidSparker
 * 
 **************************************************************
 */

import React, { useState } from "react";
import PropTypes from "prop-types";

import { ReactComponent as Hand } from "assets/images/symbol/like.svg";
import {
  LikeButtonWrapper,
  LikeButton,
  LikeButtonParticles,
  LikeButtonParticleRotates,
  LikeButtonParticleTick,
  LikeButtonSuffix,
} from "./Styled";

const particleList = Array.from(Array(10));

const TFTLikeButton = ({ favorited, handleClick }) => {
  // const [liked, setLiked] = useState(null);
  const [clicked, setClicked] = useState(false);

  function handleAnimationStart() {
    // setLiked(!liked);
    setClicked(true);
    if (handleClick)
      handleClick();
  }

  function handleAnimationEnd() {
    setClicked(false);
  }

  return (
    <LikeButtonWrapper
      ownerState={{ liked: favorited ? 1 : 0, clicked }}
      onClick={handleAnimationStart}
      onAnimationEnd={handleAnimationEnd}
    >
      {favorited && (
        <LikeButtonParticles>
          {particleList.map((_, index) => (
            <LikeButtonParticleRotates
              key={`particle-${index}`}
            >
              <LikeButtonParticleTick />
            </LikeButtonParticleRotates>
          ))}
        </LikeButtonParticles>
      )}
      <LikeButton>
        <Hand />
        <span>Like</span>
        <LikeButtonSuffix liked={favorited ? 1 : 0}>d</LikeButtonSuffix>
      </LikeButton>
    </LikeButtonWrapper>
  );
};

TFTLikeButton.defaultProps = {
  favorited: false,
  handleClick: undefined
};

TFTLikeButton.propTypes = {
  favorited: PropTypes.bool,
  handleClick: PropTypes.func
};

TFTLikeButton.displayName = "TFTLikeButton";

export default TFTLikeButton;
