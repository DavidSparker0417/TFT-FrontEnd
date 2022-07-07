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

import { Trans } from "@lingui/macro";

// @mui material components
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// TFT components
import TFTBox from "components/TFTBox";
import TFTTypography from "components/TFTTypography";
// import TFTSearchBox from "components/TFTInput/TFTSearchBox";

// pages
import DefNavBar from "pages/components/DefNavBar";
import TemplatePage from "../Templates";

// asset
import imageFAQ from "assets/images/faq.webp";
import breakpoints from "assets/theme/base/breakpoints";
import { Link } from "react-router-dom";

const {
   values: { sm, md, lg, xl, xxl },
} = breakpoints;

const MD = `@media (min-width: ${md}px)`;
const LG = `@media (min-width: ${lg}px)`;

export default function PRPage() {
   const Title = styled(TFTTypography)({
     padding: "8px",
     fontSize: "40px",
     [MD]: {
       fontSize: "48px",
     },
     [LG]: {
       fontSize: "60px",
     },
     fontWeight: "bold",
     lineHeight: 1.3,
   });

   // const Contact = styled(TFTTypography)({
   //   padding: "32px 4px 16px 4px",
   //   fontSize: "24px",
   //   fontWeight: "bold",
   //   lineHeight: 1.2,
   // });

   const Content = styled(TFTTypography)({
     padding: "0px",
     paddingBottom: "16px",
     fontSize: "14px",
     [MD]: {
       fontSize: "18px",
     },
     [LG]: {
       fontSize: "20px",
     },
     fontWeight: "normal",
     lineHeight: 1.2,
     // whiteSpace: "pre-wrap",
   });

   return (
     <>
       <DefNavBar />
       <Container>
         <TemplatePage
           top="0"
           height="fit-content"
           banner={{
             background: `linear-gradient(360deg,rgba(0,26,47,0.4),rgba(0,26,47,0.6) 70%), url(${imageFAQ})`,
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
           <Grid
             container
             // height="100%"
             spacing={1}
             justifyContent="center"
             alignItems="center"
             textAlign="left"
           >
             <Grid item xs={11}>
               <TFTBox width="100%" height="25vh"></TFTBox>
               <Title>
                 <Trans>Media</Trans>
               </Title>
               <TFTTypography fontSize="24px">
                 <Trans>For any media enquiries please contact:</Trans>
               </TFTTypography>
               {/* <Contact>Mark Thomas, TM Media</Contact> */}
               <Content>
                 {/* <Trans>Office:</Trans> +44 (0)20 7437 0474 <br /><br /> */}
                 {/* <Trans>Mobile:</Trans> +44 (0)771 074 0464 <br /><br /> */}
                 <Trans>Email:</Trans> 
                 <TFTTypography 
                   component={Link} 
                   to="contact@thefanstogether.io"
                   sx = {{
                     color: "lightblue"
                   }}
                 >
                   &nbsp;contact@thefanstogether.io
                 </TFTTypography>
                 <br /><br />
                 {/* <Trans>Location:</Trans> 2 Vicentia Quay, London, SW11 3GY <br /><br /> */}
               </Content>
             </Grid>
           </Grid>
         </TemplatePage>
       </Container>
     </>
   );
}
