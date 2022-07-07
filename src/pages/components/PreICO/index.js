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

import React, { useEffect, useState } from "react";

import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { t } from "@lingui/macro";

// mui components
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

// TFT components
import TFTButton from "components/TFTButton";

// templates
import InputForm from "pages/Templates/InputForm";

// slices
import { Success, Error } from "slices/messages";
import { registerICO } from "service/ico.service";

// context
import { useWeb3Context } from "contexts/web3/web3Context";
import { useUI } from "contexts/ui";
import { svcUtilGetErrMessage } from "service/util";

import { TARGET_NET } from "constants";

export default function PreICO() {
  const web3Context = useWeb3Context();
  const { setLoading } = useUI();
  const dispatch = useDispatch();
  const [registerWithWalletClicked, setRegisterWithWalletClicked] =
    useState(false);

  useEffect(() => {
    web3Context.setChainId(TARGET_NET.id);
  }, []);

  function doRegister({ email, wallet }) {
    console.log("[DAVID](ioc-register) ", email, wallet);
    setLoading(true);
    registerICO(email, wallet)
      .then((resp) => {
        dispatch(Success(resp.message));
        setLoading(false);
      })
      .catch((e) => {
        dispatch(Error(svcUtilGetErrMessage(e)));
        setLoading(false);
        // console.log("[DAVID](ioc-register) failed err = ", svcUtilGetErrMessage(e));
      });
  }

  const validationSchema = yup.object().shape({
    email: yup
      .string(t`Enter your email address`)
      .email(t`This is not a valid email.`)
      .required(t`This field is required!`),
  });

  const formik = useFormik({
    initialValues: {
      email: undefined,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const { email } = values;
      // dispatch(Info(t`Registering user ...`));
      doRegister({ email });
    },
  });

  const icoFormData = [
    {
      type: "email",
      name: "email",
      caption: t`Email:`,
      placeholder: t`Enter your email address`,
      icon: <EmailIcon />,
    },
  ];

  const buttons = [
    {
      type: "walletconnect",
      caption: t`Register with wallet`,
      onClick: handleConnectWallet,
      color: "blue",
    },
    {
      type: "submit",
      caption: t`Register`,
      onClick: () => { },
      color: "success",
    },
  ];

  useEffect(() => {
    if (!web3Context.connectedWallets.length)
      return;
    if (registerWithWalletClicked === true)
      registerWithWallet();
  }, [web3Context.connectedWallets]);

  function registerWithWallet() {
    doRegister({ email: formik.values.email, wallet: web3Context.account });
    setLoading(false);
    setRegisterWithWalletClicked(false);
  }

  // clicking on signup with wallet.
  function handleConnectWallet() {
    if (web3Context.connectedWallets.length)
      registerWithWallet();
    else {
      web3Context.connectWallet();
      setRegisterWithWalletClicked(true);
    }
  }

  return (
    <Container>
      <InputForm
        title={t`Register Pre-ICO`}
        description={t`$TFT - Whitelist open now! Register here: `}
        items={icoFormData}
        formik={formik}
      // buttons={buttons}
      >
        <Grid container direction="column" justifyContent="center">
          {buttons.map((btn, i) => (
            <TFTButton
              color={btn.color}
              variant="outlined"
              key={`ico-btn-${i}`}
              type={btn.type === "submit" ? "submit" : undefined}
              onClick={btn.type === "submit" ? null : btn.onClick}
              sx={{
                width: "fit-content",
                borderRadius: "8px",
                margin: "0 auto 16px",
              }}
            >
              {btn.caption}
            </TFTButton>
          ))}
        </Grid>
      </InputForm>
    </Container>
  );
}
