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
import React from "react";

import PropTypes from "prop-types";

// mui components
import Grid from "@mui/material/Grid";

// Kit components
import TFTBox from "components/TFTBox";
import TFTButton from "components/TFTButton";
import TFTTypography from "components/TFTTypography";
import TFTIconInput from "components/TFTInput/TFTIconInput";

function InputForm({ title, description, items, buttons, formik, children, ...rest }) {
  return (
    <form onSubmit={formik.handleSubmit} {...rest}>
      <TFTTypography
        variant="h3"
        sx={{
          transform: "scale(1, 1.1)",
          letterSpacing: "2px",
        }}
      >
        {title}
      </TFTTypography>
      <TFTTypography mb={3} fontSize="20px">
        {description}
      </TFTTypography>
      <TFTBox
        borderRadius="xxl"
        coloredShadow="success"
        bgColor="rgba(0, 32, 59, 0.6)"
        border="2px solid #29455C"
        pt={2} pb={3}
      >
        {items.map((item, index) => (
          <Grid container
            key={`inputform-grid-${index}`}
            spacing={1}
            justifyContent="center"
            textAlign="left"
            pt={2}
          >
            <Grid item xs={11} mb={1}>
              <TFTTypography
                variant="body2"
                sx={{
                  fontSize: { xs: "14px", md: "16px" },
                  color: "rgba(255, 255, 255, 0.6)",
                }}>
                {item.caption}
              </TFTTypography>
            </Grid>
            <Grid item xs={11} mb={2}>
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
                autocomplete={() => {
                    switch(item.type) {
                      case "password":
                        return "new-password";
                      case "username":
                        return "username";
                      case "email":
                        return "email";
                      default:
                        return "off";
                    }
                  }  
                }
                error={formik.touched[item.name] && Boolean(formik.errors[item.name])}
              />
              <TFTTypography 
                color="error"
                fontSize="14px"
              >
                {formik.errors[item.name]}
              </TFTTypography>
            </Grid>
          </Grid>
        ))}
        <Grid container
          spacing={1}
          justifyContent="center"
          textAlign="left"
          pt={2}
        >
          {children}
        </Grid>
      </TFTBox>

      {buttons &&
      <Grid container spacing={1} mt={2} justifyContent="space-evenly" alignItems="center">
        {buttons.map((button, index) => (
          <Grid item key={`button-${index}`}>
            {
              button.type === "submit"
                ? <TFTButton
                  color="warning" size="large"
                  sx={{
                    borderRadius: "8px",
                    fontSize: { xs: "14px", md: "16px" },
                  }}
                  type="submit"
                // disabled={!formik.dirty || !formik.isValid}
                >
                  {button.caption}
                </TFTButton>
                : <TFTButton
                  color="warning" size="large"
                  sx={{
                    borderRadius: "8px",
                    fontSize: { xs: "14px", md: "16px" },
                  }}
                  onClick={button.onClick}
                >
                  {button.caption}
                </TFTButton>
            }
          </Grid>
        ))}
      </Grid>
      }
    </form>
  );
}

// Setting default props for the InputForm
InputForm.defaultProps = {
  title: "",
  description: "",
  buttons: undefined,
};

// Typechecking props for the InputForm
InputForm.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  items: PropTypes.array.isRequired,
  buttons: PropTypes.array,
  formik: PropTypes.any.isRequired,
  children: PropTypes.node.isRequired,
};

export default InputForm;
