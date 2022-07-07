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
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { t, Trans } from "@lingui/macro";

import { useFormik } from "formik";
import * as yup from "yup";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import KeyIcon from "@mui/icons-material/Key";
import LockIcon from "@mui/icons-material/Lock";
import CheckIcon from "@mui/icons-material/Check";

// TFTWebkit components
import TFTTypography from "components/TFTTypography";
import TFTButton from "components/TFTButton";
import TFTImageUpload from "components/TFTImageUpload";
import TFTIconInput from "components/TFTInput/TFTIconInput";

// templates
import DefNavBar from "pages/components/DefNavBar";
import TemplatePage from "pages/Templates";

// redux 
import {
  isUserLoggedIn,
  getUser,
  updateUser,
  updateWithWallet,
  isLoading,
} from "slices/auth";

import { useUI } from "contexts/ui";

// assets
import breakpoints from "assets/theme/base/breakpoints";
import bgImage from "assets/images/help/background.webp";

const {
  values: { sm, md, lg, xl, xxl },
} = breakpoints;

const MD = `@media (min-width: ${md}px)`;
const XL = `@media (min-width: ${xl}px)`;

export default function SettingPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(isUserLoggedIn);
  const loading = useSelector(isLoading);
  const { setLoading } = useUI();
  const [logoImage, setLogoImage] = useState(null);
  const user = useSelector(getUser);
  const avatarImage = user && user.photo ? user.photo : null;
  const updatingWithWallet = false;
    // user && (!user.username || user.username === "") && (user.wallet && user.wallet !== "");

  useEffect(() => {
    if (isLoggedIn !== true || !user)
      navigate("/");
  }, []);

  const SettingFormData1 = [
    {
      type: "standard",
      name: "username",
      placeholder: t`Username`,
      readonly: false,
      icon: <PersonIcon />,
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
      name: "wallet",
      placeholder: t`Wallet address`,
      readonly: false,
      icon: <AccountBalanceWalletIcon />,
    },
  ];
  const SettingFormData2 = [
    {
      type: "password",
      name: "curPassword",
      placeholder: t`Current password`,
      icon: <KeyIcon />,
    },
    {
      type: "password",
      name: "newPassword",
      placeholder: t`New password`,
      icon: <LockIcon />,
    },
    {
      type: "password",
      name: "confirmPassword",
      placeholder: t`Confirm password`,
      icon: <CheckIcon />
    },
  ];

  const validationSchema = yup.object().shape({
    username: yup
      .string(t`Enter your username`)
      .min(3, t`Username should be of minimum 3 characters length`),
    email: yup
      .string(t`Enter your email address`)
      .email(t`This is not a valid email.`),
    wallet: yup
      .string(t`Enter your wallet address`)
      .min(12, t`wallet address should be of minimum 12 characters length`),
    curPassword: yup
      .string(t`Enter your current password`)
      .min(8, t`Password should be of minimum 8 characters length`),
    newPassword: yup
      .string(t`Enter your new password`)
      .min(8, t`Password should be of minimum 8 characters length`)
      .when("curPassword",
        (curPassword, field) => curPassword ? field.required(t`New password should be entered`) : field),
    confirmPassword: yup
      .string(t`Confirm your new password`)
      .oneOf([yup.ref("newPassword"), null], t`Passwords must match`),
  });

  const formik = useFormik({
    initialValues: {
      username: user.username ? user.username : "",
      email: user.email ? user.email : "",
      wallet: user.wallet ? user.wallet : "",
      curPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async values => {
      const {
        username, email, wallet,
        curPassword, newPassword } = values;

      console.log("[DAVID] Update User:: updating username = ", username);
      dispatch(updatingWithWallet
        ? updateWithWallet({
          username, email, wallet, curPassword, newPassword,
          photo: logoImage !== null ? logoImage : avatarImage,
        })
        : updateUser({
          type: user.type,
          username, email, wallet, curPassword, newPassword,
          photo: logoImage !== null ? logoImage : avatarImage,
        }))
        .unwrap()
        .then(() => {
          navigate("/");
        })
        .catch(() => {
        });
    }
  });

  useEffect(() => {
    setLoading(loading);
  }, [loading]);

  function onUploadLogo({ data }) {
    setLogoImage(data);
  }

  return (
    <>
      <DefNavBar />
      <Container>
        <TemplatePage
          top="0"
          height="fit-content"
          banner={{
            background: `linear-gradient(360deg,rgba(0,26,47,0.4),rgba(0,26,47,0.6) 80%), url(${bgImage})`,
            backgroundPosition: "center bottom!important",
            height: {
              xs: "196px",
              sm: `${sm / 3}px`,
              md: `${md / 3}px`,
              lg: `${lg / 3}px`,
              xl: `${xl / 3}px`,
              xxl: `${xxl / 3}px`,
            },
            bottomSmooth: true,
          }}
        >
          <Grid container
            height="100%"
            spacing={1}
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            direction="column"
            sx={{ paddingTop: "max(10vh, 80px)", paddingBottom: "100px", }}
          >
            <TFTTypography variant="h3" mb={2}>
              <Trans>Edit Profile</Trans>
            </TFTTypography>
            <TFTImageUpload
              imageUrl={avatarImage}
              sxCanvas={{
                padding: "24px 24px 8px 24px",
                backgroundColor: "rgba(0, 32, 59, 0.6)",
                borderRadius: "36px",
                border: "2px solid #29455C",
                color: "white",
                width: "fit-content",
                height: "fit-content",
              }}
              sxImage={{
                borderRadius: "50%",
                overflow: "hidden",
                width: "148px",
                height: "148px",
                [MD]: { width: "196px", height: "196px", },
                [XL]: { width: "256px", height: "256px", },
              }}
              sxFooter={{
                marginTop: "8px",
                textAlign: "right",
              }}
              onUpload={onUploadLogo}
            />
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={4} justifyContent="center" pt={8}>
                <Grid item xs={11} md={6} xl={5}>
                  <Grid container
                    spacing={1}
                    justifyContent="center"
                    textAlign="left"
                  >
                    {SettingFormData1.map((item, index) => (
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
                  </Grid>
                </Grid>
                <Grid item xs={11} md={6} xl={5}>
                  <Grid container
                    spacing={1}
                    justifyContent="center"
                    textAlign="left"
                  >
                    {SettingFormData2.map((item, index) => (
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
                  </Grid>
                </Grid>
              </Grid>
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
                <Trans>Update Setting</Trans>
              </TFTButton>
            </form>
          </Grid>
        </TemplatePage>
      </Container >
    </>
  )
}
