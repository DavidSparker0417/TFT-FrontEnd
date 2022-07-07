/**
 **************************************************************
 * The Fans Together Website - v1.0.0
 **************************************************************
 *
 * Product Page:
 * Copyright 2022 @TFTTeam (https://www.tft-dev-team.com)
 *
 * DavidSparker
 *
 **************************************************************
 */

import React, { useEffect, useState } from "react";
import { t, Trans } from "@lingui/macro";
import { useFormik } from "formik";
import * as yup from "yup";
import queryString from "query-string";
// redux
import { useDispatch } from "react-redux";
import { Error } from "../../slices/messages";
// service
import AuthService from "../../service/auth.service";
import { svcUtilGetErrMessage } from "../../service/util";
// mui components
import ContactMailIcon from "@mui/icons-material/ContactMail";
import KeyIcon from "@mui/icons-material/Key";
// TFT components
import TFTBox from "../../components/TFTBox";
import TFTTypography from "../../components/TFTTypography";
import CoverLayout from "../Templates/CoverLayout";
import InputForm from "../Templates/InputForm";
import { ReactComponent as IconCheckbox } from "assets/images/symbol/Checkmark.svg";
import { Link } from "react-router-dom";
import { LinkText } from "./Styled";

function SuccessPanel(s) {
  let msg;
  if (s.type === "mail-sent")
    msg = (
      <>
        {t`Account recovery email sent to `} {s.data}
        <br />
        {t`Please check your email for the confirmation link.`}
      </>
    );
  else if (s.type === "password-reset")
    msg = (
      <>
        <Trans>Your password was successfully changed!</Trans>
        <br />
        <LinkText component={Link} to="/signin"><Trans>Go to Login</Trans></LinkText>
      </>
    );
  return (
    <TFTBox
      sx={{
        background: "#37778485",
        border: "solid 1px #28d8f2",
        borderRadius: "20px",
        padding: "16px",
      }}
    >
      <IconCheckbox width="64px" />
      <TFTTypography>{msg}</TFTTypography>
    </TFTBox>
  );
}

export default function ResetPassword() {
  const dispatch = useDispatch();
  const [reqToken, setReqToken] = useState();
  const [successMsg, setSuccessMsg] = useState();

  useEffect(() => {
    const queries = queryString.parse(window.location.search);
    const { token } = queries;
    setReqToken(token);
    console.log("[DAVID] token = ", token);
  }, []);

  const validationScheme = yup.object(
    reqToken
      ? {
          password: yup
            .string(t`Enter your password`)
            .matches(
              /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*+/.()_{}=[,<>`~|\]\-\\]).{8,}$/,
              "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            )
            .required(t`Password is required`),
        }
      : {
          uemail: yup
            .string(t`Enter your email address`)
            .email(t`This is not a valid email.`)
            .required(t`Email address is required`),
        }
  );

  const formik = useFormik({
    initialValues: {
      uemail: "",
      password: "",
    },
    validationSchema: validationScheme,
    onSubmit: async (values) => {
      console.log("[DAVID] ResetPassword :: onSubmit!", values);
      try {
        const resp = await AuthService.passwordReset(
          values.uemail,
          reqToken,
          values.password
        );
        console.log(resp.message);
        setSuccessMsg(resp);
      } catch (e) {
        const errMsg = svcUtilGetErrMessage(e);
        dispatch(Error(errMsg));
      }
    },
  });

  const formData = [
    {
      type: "uemail",
      name: "uemail",
      caption: t`email:`,
      placeholder: t`Email Address`,
      icon: <ContactMailIcon />,
    },
  ];

  const buttons = [
    {
      type: "submit",
      caption: t`submit`,
      onClick: () => {},
    },
  ];

  const pwdResetformData = [
    {
      type: "password",
      name: "password",
      caption: t`password:`,
      placeholder: t`Enter Password`,
      icon: <KeyIcon />,
    },
  ];

  const pwdFormButtons = [
    {
      type: "submit",
      caption: t`reset`,
      onClick: () => {},
    },
  ];

  if (successMsg) {
    return (<CoverLayout>
      {SuccessPanel(successMsg)}
    </CoverLayout>);
  }
  return (
    <CoverLayout>
      {reqToken ? (
        <InputForm
          title={t`Reset Password`}
          description={<>{t`Please enter your new password.`}</>}
          items={pwdResetformData}
          buttons={pwdFormButtons}
          formik={formik}
        />
      ) : (
        <>
          <InputForm
            title={t`Recover Account`}
            description={
              <>
                {t`Please enter your email address.`}
                <br />
                {t`You will receive a link to create a new password via email.`}
              </>
            }
            items={formData}
            buttons={buttons}
            formik={formik}
          />
        </>
      )}
      <TFTTypography mt={1}>
        <Trans>Already have an account?</Trans>
        <LinkText component={Link} to="/signin">
          &nbsp;{t`Login`}
        </LinkText>
      </TFTTypography>
      <TFTTypography>
        {t`Don't have an account yet?`}
        <LinkText component={Link} to="/signup">
          &nbsp;{t`Register`}
        </LinkText>
      </TFTTypography>
    </CoverLayout>
  );
}
