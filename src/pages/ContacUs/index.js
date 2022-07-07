/**
 **************************************************************
 * The Fans Together Website - v1.0.0
 **************************************************************
 * 
 * Product Page: 
 * Copyright 2022 @TFTTeam (https://www.tft-dev-team.com)
 * 
 * Coded by DavidSparker
 * 
 **************************************************************
 */

import React from "react";
import { useDispatch } from "react-redux";
import { t, Trans } from "@lingui/macro";

import { useFormik } from "formik";
import * as yup from "yup";
import emailjs from "emailjs-com";

import { Grid } from "@mui/material";

// mui components
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import SubjectIcon from "@mui/icons-material/Subject";

// TFTWebkit components
import TFTTypography from "components/TFTTypography";
import TFTInput from "components/TFTInput";
import TFTSocialGroup from "components/TFTSocialGroup";

// templates
import CoverLayout from "pages/Templates/CoverLayout";
import InputForm from "pages/Templates/InputForm";

// redux
import { Error, Success } from "slices/messages";

const borderColor = "#1a4a66";

export default function ContactUs() {
  const dispatch = useDispatch();
  const ContactScheme = yup.object({
    email: yup
      .string()
      .email(t`This is not a valid email.`)
      .required(t`Email address is required`),
  });

  const formik = useFormik({
    initialValues: {
      from_name: "",
      email: "",
      subject: "",
      message: ""
    },
    validationSchema: ContactScheme,
    onSubmit: async values => {
      emailjs.send(
        "service_wbzo3qm",
        "template_n5f9g7f",
        {
          to_name: "TFT Team",
          from_name: values.from_name,
          subject: values.subject,
          message: values.message,
          reply_to: values.email
        },
        "vgEyvdbBdbtt93vi4")
        .then((result) => {
          console.log("[DAVID] Success to send email. ", result.text);
          dispatch(Success(t`Success to send message to team.`));
        }, (error) => {
          console.log("[DAVID] Failed to send email... ", error.text);
          dispatch(Error(t`Failed to send message to team. ${error.text}`));
        });
    },
  });

  const ContactFormData = [
    {
      type: "from_name",
      name: "from_name",
      caption: t`Name:`,
      placeholder: t`Enter your name`,
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
      type: "subject",
      name: "subject",
      caption: t`Subject:`,
      placeholder: t`Enter your subject`,
      icon: <SubjectIcon />,
    },
  ];
  const buttons = [
    {
      type: "submit",
      caption: t`Send`,
      onClick: () => { },
    },
  ];

  return (
    <CoverLayout image={require("assets/images/contactus.webp")}>
      <InputForm
        title={t`Contact`}
        items={ContactFormData}
        formik={formik}
        buttons={buttons}
      >
        <Grid item xs={11} mb={1}>
          <TFTTypography
            variant="body2"
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              color: "rgba(255, 255, 255, 0.6)",
            }}
          >
            <Trans>Message:</Trans>
          </TFTTypography>
        </Grid>
        <Grid item xs={11} mb={2}>
          <TFTInput
            type="message"
            name="message"
            multiline
            fullWidth
            rows={5}
            InputProps={{
              style: {
                color: "white",
                fontSize: "0.875rem",
              },
            }}
            sx={{
              border: "solid 2px #0d3146",
              borderRadius: "20px",
              padding: "0",
              '& textarea::-webkit-scrollbar': {
                width: "16px",
                cursor: "pointer"
              },
              '& textarea::-webkit-scrollbar-track': {
                border: `1px solid ${borderColor}`,
                borderRadius: "4px",
                cursor: "pointer"
              },
              '& textarea::-webkit-scrollbar-thumb': {
                border: `solid 3px ${borderColor}`,
                borderRadius: "8px",
                cursor: "pointer"
              }
            }}

            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.message}
            error={formik.touched.message && Boolean(formik.errors.message)}
            // helperText={formik.touched.message && Boolean(formik.errors.message)}
          />
        </Grid>
        <TFTSocialGroup />
      </InputForm>
    </CoverLayout>
  );
}
