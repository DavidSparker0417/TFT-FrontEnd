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
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { t, Trans } from "@lingui/macro";

import { Grid } from "@mui/material";
import TFTTypography from "components/TFTTypography";
import TFTSocialGroup from "components/TFTSocialGroup";
import TFTInput from "components/TFTInput";
import TFTButton from "components/TFTButton";

// import { useFormik } from "formik";
// import * as yup from "yup";

function SubscribeForm() {
  const actionUri = "https://thefanstogether.us14.list-manage.com/subscribe/post?u=5b6fefc7d7407baca8e4a26e1&amp;id=af6f6dd3a0";
  // const actionUri = "https://gmail.us14.list-manage.com/subscribe/post?u=b05af8c04f5d1519a4152d4eb&amp;id=c17868dfe0";
  return (
    <form
      action={actionUri}
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      target="_blank"
      // noValidate
    >
      <TFTInput
        placeholder={t`Enter your email address`}
        type="email"
        name="EMAIL"
        id="mce-EMAIL"
        inputProps={{
          style: {
            color: "white",
            padding: "5px",
            border: "none"
          }
        }}
        sx={{
          borderRadius: "10px 0 0 10px",
          border: "solid 2px #5e8b9b",
          borderRight: "none"
        }}
      />
      <TFTButton
        variant="outlined"
        type="submit"
        sx={{
          fontWeight: "normal",
          borderRadius: "0 10px 10px 0",
          border: "solid 2px #5e8b9b",
          padding: "0 5px 0 5px",
          background: "transparent"
        }}
      >
        <Trans>Subscribe</Trans>
      </TFTButton>
    </form>
  )
}
export default function TFTFooter({ background, ...rest }) {
  const contactUrls = [
    {
      title: t`Contact Us`,
      url: "/contact",
    },
    {
      title: t`Help`,
      url: "/help",
    },
    {
      title: t`FAQ`,
      url: "/faq",
    },
    {
      title: t`News`,
      url: "/news",
    },
  ];

  const settingUrls = [
    {
      title: t`Privacy Policy`,
      url: "/privacy-policy",
    },
    // {
    //   title: t`Cookie Settings`,
    //   url: "#",
    // },
    {
      title: t`Media`,
      url: "/media",
    },
  ];

  return (
    <Grid
      container
      sx={{ background: background, paddingTop: "1rem" }}
      {...rest}
    >
      <Grid
        xs={12}
        sm={7}
        spacing={2}
        item
        container
        direction="column"
      >
        <Grid item>
          <TFTTypography variant="body2" fontSize="16px">
            The Fans Together © 2022
          </TFTTypography>
        </Grid>
        <Grid item container>
          <SubscribeForm />
        </Grid>
        <Grid item container>
          <Grid
            xs={6}
            item
            container
            direction="column"
          >
            {
              contactUrls.map((c, i) => (
                <TFTTypography
                  key={`contact-${i}`}
                  variant="body2"
                  component={Link}
                  to={c.url}
                  fontSize="16px"
                  mb={1}
                >
                  {c.title}
                </TFTTypography>
              ))
            }
          </Grid>
          <Grid
            xs={6}
            item
            container
            direction="column"
          >
            {
              settingUrls.map((c, i) => (
                <TFTTypography
                  key={`contact-${i}`}
                  variant="body2"
                  component={Link}
                  to={c.url}
                  mb={1}
                  fontSize="16px"
                >
                  {c.title}
                </TFTTypography>
              ))
            }
          </Grid>
        </Grid>
      </Grid>
      <Grid
        xs={12} sm={5}
        mb={1}
        item container
        alignItems={{
          xs: "center",
          sm: "baseline"
        }}
        justifyContent={{
          xs: "center",
          sm: "right"
        }}
      >
        <TFTSocialGroup />
      </Grid>
    </Grid>
  )
}

TFTFooter.defaultProps = {
  background: "transparent"
};

TFTFooter.propTypes = {
  background: PropTypes.string
};