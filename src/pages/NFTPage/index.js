/**
 **************************************************************
 * The Fans Together Website - v1.0.0
 **************************************************************
 * 
 * Product Page: 
 * Copyright 2022 @TFTTeam (https://www.tft-dev-team.com)
 * 
 * Coded by DavidSparker, Telecrypto@OKI
 * 
 **************************************************************
 */

import React from "react";
import PropTypes from "prop-types";

// mui components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

import TFTPageFace from "components/TFTPageFace";
import TFTSearchBox from "components/TFTInput/TFTSearchBox";
// import TFTBox from "components/TFTBox";
import TFTButton from "components/TFTButton";
import DefNavBar from "pages/components/DefNavBar";
import NFTBanner from "pages/components/NFTBanner";

import { useNft } from "contexts/nft";

import background from "assets/images/nft/background.webp";
import { ReactComponent as IconPurchase } from "assets/images/symbol/purchase.svg";
// import { ReactComponent as IconSoonaverse } from "assets/images/symbol/social/soonaverse.svg";
// import { ReactComponent as IconOpenSea } from "assets/images/symbol/social/opensea.svg";

const PurchaseButton = ({ link, mode, children, ...rest }) => {
  return (
    <TFTButton
      component={MuiLink}
      href={link}
      target="_blank"
      color="warning"
      sx={{ margin: "0rem 0.5rem 0.5rem 0.5rem", borderRadius: "8px", padding: "0 8px" }}
      {...rest}
    >
      {mode === "icon" &&
        <IconPurchase fill="#ffffff" width="32px"
          style={{
            borderRight: "2px solid white",
            paddingRight: "5px"
          }}
        />
      }
      {children}
    </TFTButton>
  )
};

PurchaseButton.defaultProps = {
  link: "#",
  mode: "text",
};

PurchaseButton.propTypes = {
  link: PropTypes.string,
  mode: PropTypes.string,
  children: PropTypes.node,
}

const NFTPanel = ({ image, name, details, links }) => {
  return (
    <Grid xs={12} md={4} item container direction="column" width="fit-content" alignItems="center">
      <NFTBanner
        Image={image}
        Name={name}
        Details={details}
        Style={{
          bannerHeight: { xs: "72vw", sm: "380px", md: "192px", lg: "256px", xl: "300px", xxl: "340px" },
          detailFontSize: { xs: "12px", sm: "16px", md: "9px", lg: "12px", xl: "14px", xxl: "16px" },
          titleFontSize: { xs: "16px", sm: "26px", md: "10px", lg: "15px", xl: "18px", xxl: "20px" },
        }}
      />
      <Grid item container justifyContent="center">
        {links[0] &&
          (<PurchaseButton
            link={links[0]}
            mode="text"
          >
            {/* <IconSoonaverse fill="#ffffff" width="32px" style={{ marginLeft: "8px" }} /> */}
            Buy on Soonaverse
          </PurchaseButton>)
        }

        {links[1] &&
          (<PurchaseButton
            link={links[1]}
            mode="text"
          >
            {/* <IconOpenSea fill="#ffffff" width="32px" style={{ marginLeft: "8px" }} /> */}
            Buy on Opensea
          </PurchaseButton>)
        }
      </Grid>
    </Grid>
  )
}

export default function NFTPage() {
  const nft = useNft();
  return (
    <>
      <DefNavBar />
      <Container>
        <TFTPageFace
          pt={"10%"}
          image={background}
          height={{
            xs: "460px",
            sm: "500px",
            lg: "700px"
          }}
          title="NFTs"
          description="You can get involved in the TFT DAO by buying one of our NFTs which vest $TFT tokens at ICO. Each NFT offers a different value in
           tokens and you can buy one via the links underneath. Take a look below!"
        >
          <TFTSearchBox sx={{ marginTop: "2rem", marginBottom: "2rem" }} />
        </TFTPageFace>
        <Grid container my={2}>
          {
            nft.list.map((n, i) => (
              <NFTPanel
                key={`nft-${i}`}
                image={n.Image}
                name={n.Name}
                details={n.Details}
                links={[n.Link.soonaverse, n.Link.opensea]}
              />
            ))
          }
        </Grid>
      </Container>
    </>
  )
}

NFTPanel.defaultProps = {
  image: "",
  name: "",
  details: {},
  links: [],
};

NFTPanel.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  details: PropTypes.object,
  links: PropTypes.array,
};