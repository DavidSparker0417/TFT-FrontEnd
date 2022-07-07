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

import React, { useEffect, useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

import { t, Trans } from "@lingui/macro";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import * as yup from "yup";

// mui components
import ContactMailIcon from "@mui/icons-material/ContactMail";
import KeyIcon from "@mui/icons-material/Key";

// TFTWebkit components
import TFTTypography from "components/TFTTypography";

// templates
import CoverLayout from "pages/Templates/CoverLayout";
import InputForm from "pages/Templates/InputForm";

// hooks & contexts
import { useUI } from "contexts/ui";
import { useWeb3Context } from "contexts/web3/web3Context";

// redux
import { loginUser, isLoading, isUserLoggedIn } from "slices/auth";

import { TARGET_NET } from "constants";

// Social Login
import SocialLogin from "./SocialLogin";
import { LinkText } from "./Styled";

export default function LoginPage() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(isUserLoggedIn);
  const loading = useSelector(isLoading);
  const navigate = useNavigate();
  const { setLoading } = useUI();
  const web3Context = useWeb3Context();
  const [walletLogin, setWalletLogin] = useState(false);

  useEffect(() => {
    web3Context.setChainId(TARGET_NET.id);
  }, []);

  function doLogIn({ type, data }) {
    dispatch(loginUser({ type, data }))
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch(() => { });
  }

  // clicking on signup with wallet.
  function handleConnectWallet() {
    if (web3Context.connectedWallets.length) {
      loginWithWallet();
    } else {
      web3Context.connectWallet();
      setWalletLogin(true);
    }
  }

  function loginWithWallet() {
    doLogIn({
      type: "wallet",
      data: { wallet: web3Context.account },
    });
  }

  useEffect(() => {
    if (!web3Context.connectedWallets.length)
      return;
    if (walletLogin === true)
      loginWithWallet();
  }, [web3Context.connectedWallets]);

  const LoginValidationSchema = yup.object({
    uemail: yup
      .string(t`Enter your username or email address`)
      .min(3, t`Username should be of minimum 3 characters length`)
      .required(t`Username or Email address is required`),
    password: yup
      .string(t`Enter your password`)
      .min(8, t`Password should be of minimum 8 characters length`)
      .required(t`Password is required`),
  });

  const formik = useFormik({
    initialValues: {
      uemail: "",
      password: "",
    },
    validationSchema: LoginValidationSchema,
    onSubmit: async (values) => {
      const { uemail, password } = values;
      const reqData =
        uemail.indexOf("@") !== -1
          ? {
            email: uemail,
            password,
          }
          : {
            username: uemail,
            password,
          };

      doLogIn({
        type: "tft",
        data: {
          ...reqData,
          wallet: web3Context.account,
        },
      });
    },
  });

  useEffect(() => {
    if (isLoggedIn === true) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    setLoading(loading);
  }, [loading]);

  const LoginFormData = [
    {
      type: "uemail",
      name: "uemail",
      caption: t`Username / email:`,
      placeholder: t`Username or Email Address`,
      icon: <ContactMailIcon />,
    },
    {
      type: "password",
      name: "password",
      caption: t`Password:`,
      placeholder: t`Enter your password`,
      icon: <KeyIcon />,
    },
  ];
  const buttons = [
    {
      type: "submit",
      caption: t`Log In`,
      onClick: () => { },
    },
    {
      type: "walletconnect",
      caption: t`Log in with wallet`,
      onClick: handleConnectWallet,
    },
  ];

  return (
    <CoverLayout>
      <InputForm
        title={t`Log In`}
        items={LoginFormData}
        formik={formik}
        buttons={buttons}
      >
        <TFTTypography
          variant="body2"
          fontSize="16px"
        >
          {t`Don't have an account? `}
          <LinkText
            component={Link}
            to="/signup"
            fontSize="14px"
          >
            &nbsp;<Trans>Sign up</Trans>
          </LinkText>
        </TFTTypography>
        <TFTTypography variant="body2" fontSize="16px" width="100%" textAlign="center">
          {t`Forget your password?`}&nbsp;
          <LinkText
            component={Link}
            to="/password-reset"
            fontSize="14px"
          >
            <Trans>Click here to reset it.</Trans>
          </LinkText>
        </TFTTypography>
      </InputForm>
      <SocialLogin onSuccess={doLogIn} />
    </CoverLayout>
  );
}
