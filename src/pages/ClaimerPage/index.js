/**
 **************************************************************
 * The Fans Together Website - v1.0.0
 **************************************************************
 * 
 * Product Page: 
 * Copyright 2022 @TFTTeam (https://www.tft-dev-team.com)
 * 
 * Telecrypto@OKI
 * 
 **************************************************************
 */

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { t, Trans } from "@lingui/macro";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";

// mui components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PostalIcon from "@mui/icons-material/LocationOn";
import AddressIcon from "@mui/icons-material/Home";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import DomainIcon from "@mui/icons-material/Domain";
import LanguageIcon from "@mui/icons-material/Language";

// TFTWebkit components
import TFTBox from "components/TFTBox";
import TFTButton from "components/TFTButton";
import TFTTypography from "components/TFTTypography";
import TFTIconInput from "components/TFTInput/TFTIconInput";

import DefNavBar from "pages/components/DefNavBar";
import TemplatePage from "pages/Templates";

// slices
import { Success, Error } from "slices/messages";
import { postShipping } from "service/shipping.service";

// context
import { useWeb3Context } from "contexts/web3/web3Context";
import { useContract } from "contexts/contract";
import { useUI } from "contexts/ui";
import { svcUtilGetErrMessage } from "service/util";
import { dsErrMsgGet } from "helpers/ds-lib/ds-web3";

// assets
import imageClaimer from "assets/images/nft/claimer.webp";
import breakpoints from "assets/theme/base/breakpoints";

import { CLAIM_NET } from "constants";

const {
  values: { sm, md, lg, xl, xxl },
} = breakpoints;

function ShippingDetails({ wallet, tokenId, claimHandler }) {
  const { setLoading } = useUI();
  const dispatch = useDispatch();

  const ShippingDetailsForm = [
    {
      type: "standard",
      name: "username",
      placeholder: t`Full name`,
      readonly: false,
      icon: <PersonIcon />,
    },
    {
      type: "standard",
      name: "phoneNumber",
      placeholder: t`Phone number`,
      readonly: false,
      icon: <PhoneIcon />,
    },
    {
      type: "standard",
      name: "email",
      placeholder: t`Email address`,
      readonly: false,
      icon: <EmailIcon />,
    },
    {
      type: "standard",
      name: "postCode",
      placeholder: t`Zip/Postal Code`,
      readonly: false,
      icon: <PostalIcon />,
    },
    {
      type: "standard",
      name: "addrLine1",
      placeholder: t`Address Line1`,
      readonly: false,
      icon: <AddressIcon />,
    },
    {
      type: "standard",
      name: "addrLine2",
      placeholder: t`Address Line2(optional)`,
      readonly: false,
      icon: <AddressIcon />,
    },
    {
      type: "standard",
      name: "townCity",
      placeholder: t`Town/City`,
      readonly: false,
      icon: <LocationCityIcon />,
    },
    {
      type: "standard",
      name: "state",
      placeholder: t`State`,
      readonly: false,
      icon: <DomainIcon />,
    },
    {
      type: "standard",
      name: "country",
      placeholder: t`Country`,
      readonly: false,
      icon: <LanguageIcon />,
    },
  ];

  function submitShippingDetails({
    wallet,
    tokenId,
    fullName,
    phoneNumber,
    email,
    postalCode,
    addrLine1,
    addrLine2,
    city,
    state,
    country
  }) {
    console.log("Submitting shipping details ... ",
      wallet,
      tokenId,
      fullName,
      phoneNumber,
      email,
      postalCode,
      addrLine1,
      addrLine2,
      city,
      state,
      country);

    postShipping(
      wallet,
      tokenId,
      fullName,
      phoneNumber,
      email,
      postalCode,
      addrLine1,
      addrLine2,
      city,
      state,
      country
    ).then((resp) => {
      dispatch(Success(resp.message));
    })
      .catch((e) => {
        dispatch(Error(svcUtilGetErrMessage(e)));
        console.log("submitShippingDetails failed err = ", svcUtilGetErrMessage(e));
      });
  }

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validationSchema = yup.object().shape({
    username: yup
      .string(t`Enter your full name`)
      .required(t`Full name is required`),
    phoneNumber: yup
      .string(t`Enter your phone number`)
      .matches(phoneRegExp, t`Phone number is not valid`),
    email: yup
      .string(t`Enter your email address`)
      .email(t`This is not a valid email address.`)
      .required(t`A email address is required`),
    postCode: yup
      .string(t`Enter your post code/zip code`)
      .required(t`A zip/postal code is required`),
    addrLine1: yup
      .string(t`Enter your address line1`)
      .required(t`A address line is required`),
    townCity: yup
      .string(t`Enter your town/city`)
      .required(t`A town/city is required`),
    state: yup
      .string(t`Enter your state`)
      .required(t`A state is required`),
    country: yup
      .string(t`Enter your country`)
      .required(t`A country is required`),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      phoneNumber: "",
      email: "",
      postCode: "",
      addrLine1: "",
      addrLine2: "",
      townCity: "",
      state: "",
      coutry: "",
    },
    validationSchema: validationSchema,
    onSubmit: async values => {
      const {
        username,
        phoneNumber,
        email,
        postCode,
        addrLine1,
        addrLine2,
        townCity,
        state,
        country
      } = values;

      setLoading(true);
      try {
        if (claimHandler) {
          const ret = await claimHandler();
          if (ret) {
            await submitShippingDetails({
              wallet: wallet,
              tokenId: tokenId,
              fullName: username,
              phoneNumber: phoneNumber,
              email: email,
              postalCode: postCode,
              addrLine1: addrLine1,
              addrLine2: addrLine2,
              city: townCity,
              state: state,
              country: country,
            });
          }
        }
        setLoading(false);
      } catch (e) {
        console.log("OnSubmit of claimerPage. err=", e.message);
        setLoading(false);
        return 0;
      }
    }
  });

  return (
    <TFTBox
      sx={{
        border: "2px solid #29455C",
        backgroundColor: "rgba(0, 26, 47, 0.4)",
        borderRadius: "12px",
      }}
      p={4}
      m={4}
    >
      <TFTTypography variant="h3" pb={3} sx={{ textAlign: "center" }}>
        Shipping Details
      </TFTTypography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container
          spacing={1}
          justifyContent="center"
          textAlign="left"
        >
          {ShippingDetailsForm.map((item, index) => (
            <Grid key={`inputform-grid-${index}`} item xs={12} mb={2}>
              <TFTIconInput
                type={item.type}
                name={item.name}
                id={item.name}
                placeholder={item.placeholder}
                readOnly={Boolean(item.readonly)}
                icon={item.icon}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values[item.name]}
                error={formik.touched[item.name] && Boolean(formik.errors[item.name])}
              />
            </Grid>
          ))}
          <TFTButton
            type="submit"
            color="warning"
            size="large"
            sx={{
              borderRadius: "8px",
              fontSize: "16px",
              marginTop: "24px",
            }}
          >
            <Trans>Submit</Trans>
          </TFTButton>
        </Grid>
      </form>
    </TFTBox>
  );
}

ShippingDetails.propTypes = {
  wallet: PropTypes.string.isRequired,
  tokenId: PropTypes.string.isRequired,
  claimHandler: PropTypes.func,
};


export default function ClaimerPage() {
  const web3Context = useWeb3Context();
  const contract = useContract();
  const dispatch = useDispatch();
  const { setLoading } = useUI();
  const [claimableNFTs, setClaimableNFTs] = useState();
  const [claimedNFTs, setClaimedNFTs] = useState();
  const [walletIsConnected, setWalletIsConnected] = useState(false);

  useEffect(() => {
    web3Context.setChainId(CLAIM_NET.id);
  }, []);

  useEffect(() => {
    if (web3Context.connectedWallets.length
      /* && check chain id */
    ) {
      setWalletIsConnected(true);
      getClaimDetails();
    } else {
      setWalletIsConnected(false);
    }
  }, [web3Context.connectedWallets/*, chainid */]);

  async function getClaimDetails() {
    setLoading(true);
    const claimDetails = await contract.TFTGetClaimDetails();

    setClaimableNFTs(claimDetails.claimableNFTs);
    setClaimedNFTs(claimDetails.claimedNFTs);
    setLoading(false);
    console.log("Gettng claim information", claimDetails);
    if (!claimDetails)
      setTimeout(getClaimDetails, 1000);
  }

  async function claimPhysicalNFT() {
    try {
      const remain = await contract.TFTClaimNFT();
      console.log("DAOPIONEER Deposit. remain = ", remain);
      getClaimDetails();
      return true;
    } catch (e) {
      const message = dsErrMsgGet(e.message);
      console.log("Error DAOPIONEER Deposit. err = ", message);
      dispatch(Error(message));
      return false;
    }
  }

  function handleConnectWallet() {
    if (web3Context.connectedWallets.length) {
      web3Context.setChainId(CLAIM_NET.id);
    } else {
      web3Context.connectWallet();
    }
  }

  return (
    <>
      <DefNavBar />
      <Container>
        <TemplatePage
          top="0"
          height="fit-content"
          banner={{
            background: `linear-gradient(360deg,rgba(0,26,47,0.4),rgba(0,26,47,0.6) 70%), url(${imageClaimer})`,
            backgroundPosition: "center top!important",
            height: {
              xs: "196px",
              sm: `${sm / 2}px`,
              md: `${md / 2}px`,
              lg: `${lg / 2}px`,
              xl: `${xl / 2}px`,
              xxl: `${xxl / 2}px`,
            },
            topSmooth: true,
            bottomSmooth: true,
          }}
        >
          <Grid container
            justifyContent="center"
            pt={16}
          >
            <Grid item xs={12}>
              <TFTTypography variant="h2" sx={{ textAlign: "center", letterSpacing: "0.3rem", }}>
                NFT Claim
              </TFTTypography>
            </Grid>
            <Grid item xs={12} md={6} sx={{ paddingTop: { xs: "32px", md: "48px", lg: "64px" } }}>
              <TFTBox
                sx={{
                  border: "2px solid #29455c",
                  padding: "16px",
                  backgroundColor: "rgba(31, 69, 92, 0.3)",
                  backdropFilter: "blur(4px)",
                  borderRadius: "16px",
                }}
                p={4}
                m={4}
              >
                <TFTTypography variant="h3" sx={{ textAlign: "center" }}>
                  Claimable NFTs
                </TFTTypography>
                <TFTTypography variant="h3" sx={{ textAlign: "center" }}>
                  {claimableNFTs ? claimableNFTs.count : 0}
                </TFTTypography>
              </TFTBox>
            </Grid>
            <Grid item xs={12} md={6} sx={{ paddingTop: { xs: "0px", md: "48px", lg: "64px" } }}>
              <TFTBox
                sx={{
                  border: "2px solid #29455c",
                  padding: "16px",
                  backgroundColor: "rgba(31, 69, 92, 0.3)",
                  backdropFilter: "blur(4px)",
                  borderRadius: "8px",
                }}
                p={4}
                m={4}
              >
                <TFTTypography variant="h3" sx={{ textAlign: "center" }}>
                  Claimed NFTs
                </TFTTypography>
                <TFTTypography variant="h3" sx={{ textAlign: "center" }}>
                  {claimedNFTs ? claimedNFTs.count : 0}
                </TFTTypography>
              </TFTBox>
            </Grid>
            <Grid
              item
              xs={12} md={10} lg={8} xl={6}
              top={{ xs: "16px", md: "24px", lg: "32px" }}
              textAlign="center"
            >
              {walletIsConnected && claimedNFTs && claimableNFTs?.count
                ? <ShippingDetails
                  wallet={web3Context.account}
                  tokenId={claimedNFTs.id}
                  claimHandler={claimPhysicalNFT}
                />
                : !walletIsConnected
                  ? <TFTButton
                    size="large"
                    variant="outlined"
                    onClick={handleConnectWallet}

                    sx={{
                      borderRadius: "8px",
                      fontSize: "20px",
                      marginBottom: "32px",
                    }}
                  >
                    Connect wallet
                  </TFTButton>
                  : <TFTTypography variant="h4" sx={{ textAlign: "center", marginBottom: "32px" }}>
                    You cannot claim the physical NFT without having a DAOPIONEER NFT.
                  </TFTTypography>
              }
            </Grid>
          </Grid>
        </TemplatePage>
      </Container>
    </>
  )
}
