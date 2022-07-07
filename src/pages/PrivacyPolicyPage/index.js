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

import { Trans } from "@lingui/macro";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// TFT components
import TFTBox from "components/TFTBox";
import TFTSearchBox from "components/TFTInput/TFTSearchBox";

// pages
import DefNavBar from "pages/components/DefNavBar";
import TemplatePage from "pages/Templates";

// asset
import imageFAQ from "assets/images/faq.webp";
import breakpoints from "assets/theme/base/breakpoints";

import { Title, H1Text, H2Text, H3Text, BodyText } from "./Styled";

const {
  values: { sm, md, lg, xl, xxl },
} = breakpoints;

export default function PrivacyPolicyPage() {
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
          <Grid container
            // height="100%"
            spacing={1}
            justifyContent="center"
            alignItems="center"
            textAlign="left"
          >
            <Grid item xs={12}>
              <TFTBox width="100%" height="25vh">
              </TFTBox>
              <Title>
                <Trans>Privacy Policy</Trans>
              </Title>
              <TFTSearchBox sx={{ marginTop: "8px", marginBottom: "2rem" }} />
              {PrivacyPolicyText.map((item, index) => (
                (item.type === "h1") ? <H1Text key={`priv-policy-${index}`}>{item.text}</H1Text> :
                  (item.type === "h2") ? <H2Text key={`priv-policy-${index}`}>{item.text}</H2Text> :
                    (item.type === "h3") ? <H3Text key={`priv-policy-${index}`}>{item.text}</H3Text> :
                      <BodyText key={`priv-policy-${index}`}>{item.text}</BodyText>
              ))}
            </Grid>
          </Grid>
        </TemplatePage>
      </Container>
    </>
  );
}

const PrivacyPolicyText = [
  {
    type: "body",
    text: <Trans id="priv.policy.t0">This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information
      when You use the Service and tells You about Your privacy rights and how the law protects You.<br />
      We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of
      information in accordance with this Privacy Policy.</Trans>
  },
  {
    type: "h1",
    text: <Trans>Interpretation and Definitions</Trans>
  },
  {
    type: "h2",
    text: <Trans>Interpretation</Trans>
  },
  {
    type: "body",
    text: <Trans id="priv.policy.t1">The words of which the initial letter is capitalized have meanings defined under the following conditions.
      The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</Trans>
  },

  {
    type: "h2",
    text: <Trans>Definitions</Trans>
  },
  {
    type: "body",
    text: <Trans id="priv.policy.t2">For the purposes of this Privacy Policy:<br />
      <ul>
        <li><em>Account</em> means a unique account created for You to access our Service or parts of our Service.</li>
        <li><em>Company</em> (referred to as either &quot;the Company&quot;, &quot;We&quot;,
          &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to The Fans Together.</li>
        <li><em>Cookies</em> are small files that are placed on Your computer, mobile device or any other device by a website,
          containing the details of Your browsing history on that website among its many uses.</li>
        <li><em>Country</em> refers to: United Kingdom</li>
        <li><em>Device</em> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
        <li><em>Personal Data</em> is any information that relates to an identified or identifiable individual.</li>
        <li><em>Service</em> refers to the Website.</li>
        <li><em>Service Provider</em> means any natural or legal person who processes the data on behalf of the Company.
          It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide
          the Service on behalf of the Company, to perform services related to the Service or to assist the Company in
          analyzing how the Service is used.</li>
        <li><em>Usage Data</em> refers to data collected automatically, either generated by the use of the Service or
          from the Service infrastructure itself (for example, the duration of a page visit).</li>
        <li><em>Website</em> refers to The Fans Together, accessible from&nbsp;
          <a href="https://thefanstogether.io" target="_blank" rel="noreferrer">
            https://thefanstogether.io
          </a>
        </li>
        <li><em>You</em> means the individual accessing or using the Service, or the company, or other legal entity
          on behalf of which such individual is accessing or using the Service, as applicable.</li>
      </ul>
    </Trans>
  },
  {
    type: "h1",
    text: <Trans id="priv.policy.h1">Collecting and Using Your Personal Data</Trans>
  },
  {
    type: "h2",
    text: <Trans>Types of Data Collected</Trans>
  },
  {
    type: "h3",
    text: <Trans>Personal Data</Trans>
  },
  {
    type: "body",
    text: <Trans id="priv.policy.t3">
      While using Our Service, We may ask You to provide Us with certain personally identifiable information that
      can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
      <ul>
        <li>Email address</li>
        <li>First name and last name</li>
        <li>Phone number</li>
        <li>Address, State, Province, ZIP/Postal code, City</li>
        <li>Usage Data</li>
      </ul>
    </Trans>
  },
  {
    type: "h3",
    text: <Trans>Usage Data</Trans>
  },
  {
    type: "body",
    text: <Trans id="priv.policy.t4">
      Usage Data is collected automatically when using the Service.<br />Usage Data may include information such as
      Your Device&apos;s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service
      that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.<br />
      When You access the Service by or through a mobile device, We may collect certain information automatically, including,
      but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device,
      Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
      We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or
      through a mobile device.
    </Trans>
  },
  {
    type: "h3",
    text: <Trans>Tracking Technologies and Cookies</Trans>
  },
  {
    type: "body",
    text: <Trans id="priv.policy.t5">
      We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information.
      Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyse Our Service.
      The technologies We use may include:
      <ul>
        <li><em>Cookies or Browser Cookies.</em> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse
          all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some
          parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.</li>
        <li><em>Flash Cookies.</em> Certain features of our Service may use local stored objects (or Flash Cookies) to collect and store
          information about Your preferences or Your activity on our Service. Flash Cookies are not managed by the same browser settings
          as those used for Browser Cookies. For more information on how You can delete Flash Cookies, please read &quot;Where can I change the
          settings for disabling, or deleting local shared objects?&quot; available at&nbsp;
          <a href="https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_" target="_blank" rel="noreferrer">
            https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_
          </a>
          &nbsp;change_the_settings_for_disabling__or_deleting_local_shared_objects_</li>
        <li><em>Web Beacons.</em> Certain sections of our Service and our emails may contain small electronic files known as web beacons
          (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have
          visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain
          section and verifying system and server integrity).</li>
      </ul>
      Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline,
      while Session Cookies are deleted as soon as You close Your web browser. Learn more about cookies:&nbsp;
      <a href="https://www.privacypolicies.com/blog/cookies/">What Are Cookies?</a><br />
      We use both Session and Persistent Cookies for the purposes set out below:
      <ul>
        <li><em>Necessary / Essential Cookies</em><br />
          Type: Session Cookies<br />
          Administered by: Us<br />
          Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features.
          They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot
          be provided, and We only use these Cookies to provide You with those services.
        </li>
        <li><em>Cookies Policy / Notice Acceptance Cookies</em><br />
          Type: Persistent Cookies<br />
          Administered by: Us<br />
          Purpose: These Cookies identify if users have accepted the use of cookies on the Website.
        </li>
        <li><em>Functionality Cookies</em><br />
          Type: Persistent Cookies<br />
          Administered by: Us<br />
          Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference.
          The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.
        </li>
      </ul>
      For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.
    </Trans>
  },
  {
    type: "h2",
    text: <Trans>Use of Your Personal Data</Trans>
  },
  {
    type: "body",
    text: <Trans id="priv.policy.t6">
      The Company may use Personal Data for the following purposes:
      <ul>
        <li><em>To provide and maintain our Service,</em> including to monitor the usage of our Service.</li>
        <li><em>To manage Your Account:</em> to manage Your registration as a user of the Service. The Personal Data You provide can give You access
          to different functionalities of the Service that are available to You as a registered user.</li>
        <li><em>For the performance of a contract:</em> the development, compliance and undertaking of the purchase contract for the products,
          items or services You have purchased or of any other contract with Us through the Service.</li>
        <li><em>To contact You:</em> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as
          a mobile application&apos;s push notifications regarding updates or informative communications related to the functionalities, products or
          contracted services, including the security updates, when necessary or reasonable for their implementation.</li>
        <li><em>To provide You</em> with news, special offers and general information about other goods, services and events which we offer that
          are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</li>
        <li><em>To manage Your requests:</em> To attend and manage Your requests to Us.</li>
        <li><em>For business transfers:</em> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization,
          dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation,
          or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</li>
        <li><em>For other purposes:</em> We may use Your information for other purposes, such as data analysis, identifying usage trends, determining
          the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</li>
      </ul>
      We may share Your personal information in the following situations:
      <ul>
        <li><em>With Service Providers:</em> We may share Your personal information with Service Providers to monitor and analyze the use of our Service,
          to contact You.</li>
        <li><em>For business transfers:</em> We may share or transfer Your personal information in connection with, or during negotiations of, any merger,
          sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</li>
        <li><em>With Affiliates:</em> We may share Your information with Our affiliates, in which case we will require those affiliates to honour this
          Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or
          that are under common control with Us.</li>
        <li><em>With business partners:</em> We may share Your information with Our business partners to offer You certain products, services or promotions.</li>
        <li><em>With other users:</em> when You share personal information or otherwise interact in the public areas with other users, such information
          may be viewed by all users and may be publicly distributed outside.</li>
        <li><em>With Your consent:</em> We may disclose Your personal information for any other purpose with Your consent.</li>
      </ul>
    </Trans>
  },
  {
    type: "h2",
    text: <Trans>Retention of Your Personal Data</Trans>
  },
  {
    type: "body",
    text: <Trans id="priv.policy.t7">
      The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain
      and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply
      with applicable laws), resolve disputes, and enforce our legal agreements and policies.<br />
      The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this
      data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
      </Trans>
  },
  {
    type: "h2",
    text: <Trans>Transfer of Your Personal Data</Trans>
  },
  {
    type: "body",
    text: <Trans id="priv.policy.t8">
      Your information, including Personal Data, is processed at the Company&apos;s operating offices and in any other places where the parties involved in
      the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province,
      country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.<br />
      Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.<br />
      The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no
      transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of
      Your data and other personal information.
      </Trans>
  },
  {
    type: "h2",
    text: <Trans>Disclosure of Your Personal Data</Trans>
  },
  {
    type: "h3",
    text: <Trans>Business Transactions</Trans>
  },
  {
    type: "body",
    text: <Trans id="priv.policy.t9">
      If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before
      Your Personal Data is transferred and becomes subject to a different Privacy Policy.
      </Trans>
  },
  {
    type: "h3",
    text: <Trans>Law enforcement</Trans>
  },
  {
    type: "body",
    text: <Trans id="priv.policy.t10">
      Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to
      valid requests by public authorities (e.g. a court or a government agency).
      </Trans>
  },
  {
    type: "h3",
    text: <Trans>Other legal requirements</Trans>
  },
  {
    type: "body",
    text: <Trans id="priv.policy.t11">
      The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:
      <ul>
        <li>Comply with a legal obligation</li>
        <li>Protect and defend the rights or property of the Company</li>
        <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
        <li>Protect the personal safety of Users of the Service or the public</li>
        <li>Protect against legal liability</li>
      </ul>
    </Trans>
  },
  {
    type: "h2",
    text: <Trans>Security of Your Personal Data</Trans>
  },
  {
    type: "body",
    text: <Trans id="priv.policy.t12">
      The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic
      storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
      </Trans>
  },
  {
    type: "h1",
    text: <Trans>Children&apos;s Privacy</Trans>
  },
  {
    type: "body",
    text: <Trans id="priv.policy.t13">
      Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under
      the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become
      aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that
      information from Our servers.<br />
      If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your
      parent&apos;s consent before We collect and use that information.
      </Trans>
  },
  {
    type: "h1",
    text: <Trans>Links to Other Websites</Trans>
  },
  {
    type: "body",
    text: <Trans id="priv.policy.t14">
      Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that
      third party&apos;s site. We strongly advise You to review the Privacy Policy of every site You visit.<br />
      We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
      </Trans>
  },
  {
    type: "h1",
    text: <Trans>Changes to this Privacy Policy</Trans>
  },
  {
    type: "body",
    text: <Trans id="priv.policy.t15">
      We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.<br />
      We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the &quot;Last updated&quot;
      date at the top of this Privacy Policy.<br />
      You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
      </Trans>
  },
  {
    type: "h1",
    text: <Trans>Contact Us</Trans>
  },
  {
    type: "body",
    text: <Trans id="priv.policy.t16">
      If you have any questions about this Privacy Policy, You can contact us:
      <ul>
        <li>By email: contact@thefanstogether.io</li>
      </ul>
    </Trans>
  },
];
