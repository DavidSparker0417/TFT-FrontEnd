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
import queryString from "query-string";

// react-router-dom components
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { t, Trans } from "@lingui/macro";

import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import * as yup from "yup";

// mui components
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import CheckIcon from "@mui/icons-material/Check";

// TFTWebkit components
import TFTTypography from "components/TFTTypography";

// templates
import CoverLayout from "pages/Templates/CoverLayout";
import InputForm from "pages/Templates/InputForm";

// services
import AuthService from "service/auth.service";

// slices
import { register, isLoading, isUserLoggedIn } from "slices/auth";
import {
  // Info,
  Error,
} from "slices/messages";

// context
import { useWeb3Context } from "contexts/web3/web3Context";
import { useUI } from "contexts/ui";

import { TARGET_NET } from "constants";

import SocialLogin from "./SocialLogin";

export default function SignupPage() {
  const web3Context = useWeb3Context();
  const { setLoading } = useUI();
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);
  const isLoggedIn = useSelector(isUserLoggedIn);
  const navigate = useNavigate();
  const [signupWalletButtonClicked, setSignupWalletButtonClicked] =
    useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(async () => {
    web3Context.setChainId(TARGET_NET.id);

    if (isLoggedIn === true) {
      navigate("/");
    }

    const queries = queryString.parse(window.location.search);
    // delete all search parameters
    let searchKeys = [];
    searchParams.forEach(function (value, key) {
      searchKeys.push(key);
    });
    searchKeys.forEach((key) => {
      searchParams.delete(key);
    });
    setSearchParams(searchParams);

    const { oauth_token, oauth_verifier } = queries;
    if (!oauth_token || !oauth_verifier) return;
    // twitter login step 3
    console.log(
      `[DAVID] Twitter oauth step3 :: oauth_token = ${oauth_token}, oauth_verifier=${oauth_verifier}`
    );
    try {
      const twitterProfile = await AuthService.socialLogin("twitter", 3, {
        oauth_token,
        oauth_verifier,
      });
      console.log("[DAVID] Twitter profile = ", twitterProfile);
      doRegister({
        type: "twitter",
        data : {
          name: twitterProfile.name,
          photo: twitterProfile.photo
        }
      })
    } catch (e) {
      dispatch(Error("Twitter login failed!"));
      console.log(e.message);
    }
  }, []);

  function doRegister({ type, data }) {
    dispatch(register({ type, data }))
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch(() => {});
  }

  const validationSchema = yup.object().shape({
    username: yup
      .string(t`Enter your username`)
      .min(3, t`Username should be of minimum 3 characters length`)
      .required(t`This field is required!`),
    email: yup
      .string(t`Enter your email address`)
      .email(t`This is not a valid email.`)
      .required(t`This field is required!`),
    password: yup
      .string(t`Enter your password`)
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*+/.()_{}=[,<>`~|\]\-\\]).{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
      .required(t`Password is required`),
    confirmPassword: yup
      .string(t`Confirm your password`)
      .oneOf([yup.ref("password"), null], t`Passwords must match`)
      .required(t`Please retype your password.`),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      doRegister({
        type: "tft",
        data: {
          ...values,
        },
      });
    },
  });

  const SignupFormData = [
    {
      type: "username",
      name: "username",
      caption: t`Name:`,
      placeholder: t`Enter your username`,
      icon: <PersonIcon />,
    },
    {
      type: "email",
      name: "email",
      caption: t`Email:`,
      placeholder: t`Enter your email address`,
      icon: <EmailIcon />,
    },
    {
      type: "password",
      name: "password",
      caption: t`Password:`,
      placeholder: t`Enter your password`,
      icon: <KeyIcon />,
    },
    {
      type: "password",
      name: "confirmPassword",
      caption: t`Confirm Password:`,
      placeholder: t`Confirm your password`,
      icon: <CheckIcon />,
    },
  ];

  const buttons = [
    {
      type: "submit",
      caption: t`Sign up`,
      onClick: () => {},
    },
    {
      type: "walletconnect",
      caption: t`Sign up with wallet`,
      onClick: handleConnectWallet,
    },
  ];

  useEffect(() => {
    setLoading(loading);
  }, [loading]);

  useEffect(() => {
    if (!web3Context.connectedWallets.length)
      return;
    if (signupWalletButtonClicked === true)
      signUpWithWallet();
  }, [web3Context.connectedWallets]);

  function signUpWithWallet() {
    doRegister({
      type: "wallet",
      data: {
        wallet: web3Context.account,
      },
    });
    setLoading(false);
  }

  // clicking on signup with wallet.
  function handleConnectWallet() {
    if (web3Context.connectedWallets.length)
      signUpWithWallet();
    else {
      console.log("handleConnectWallet", web3Context);
      web3Context.connectWallet();
      setSignupWalletButtonClicked(true);
    }
  }

  return (
    <CoverLayout>
      <InputForm
        title={t`Sign Up`}
        items={SignupFormData}
        formik={formik}
        buttons={buttons}
      >
        <TFTTypography
          variant="body2"
          sx={{
            fontSize: { xs: "14px", md: "16px" },
          }}
        >
          {t`Already have an account? `}
          <TFTTypography
            component={Link}
            to="/signin"
            variant="button"
            color="info"
            fontWeight="medium"
            textGradient
            sx={{
              fontSize: { xs: "14px", md: "16px" },
            }}
          >
            <Trans>Log in here</Trans>
          </TFTTypography>
        </TFTTypography>
      </InputForm>
      <SocialLogin onSuccess={doRegister}/>
    </CoverLayout>
  );
}
