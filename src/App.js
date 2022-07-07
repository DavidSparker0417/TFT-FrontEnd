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
import React, { useEffect, } from "react";

// react-router components
import {
  Routes,
  Route,
  // Redirect,
  Navigate,
  useLocation
} from "react-router-dom";

// multilingual libraries
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";

// @mui components
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

// import store from "store";

// TFT-WebKit themes
import theme from "assets/theme";
import TFTFooter from "components/TFTFooter";

import TFTMessages from "./pages/components/TFTMessages";

// Routes
import LandingPage from "./pages/LandingPage";
import WhitePaper from "pages/WhitePaper";
import AboutPage from "pages/AboutPage";
import DonatePage from "pages/DonatePage";
import ArticlePage from "pages/ArticlePage";
import NewsEditor from "pages/NewsPage/NewsEditor";
import LoginPage from "pages/Authentication/Login";
import ResetPassword from "./pages/Authentication/Reset-Password";
import SignupPage from "pages/Authentication/Signup";
import NFTPage from "pages/NFTPage";
import IcoPage from "pages/IcoPage";
import FAQPage from "./pages/FAQPage";
import PrivacyPolicyPage from "pages/PrivacyPolicyPage";
import HelpPage from "pages/HelpPage";
import ContactUs from "pages/ContacUs";
import NewsPage from "pages/NewsPage";
import ProfilePage from "pages/Authentication/Profile";
import SettingPage from "pages/Authentication/Setting";
import PRPage from "./pages/PRPage";
import ClaimerPage from "./pages/ClaimerPage";

import { initLocale } from "assets/locales";

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    initLocale();
  }, []);
  
  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  return (
    <I18nProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TFTMessages />
        <Routes>
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/white-paper" element={<WhitePaper />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/news" element={<ArticlePage />} />
          <Route path="/news/:slug" element={<NewsPage />} />
          <Route path="/news/edit" element={<NewsEditor />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/password-reset" element={<ResetPassword />} />
          <Route path="/nfts" element={<NFTPage />} />
          <Route path="/ico" element={<IcoPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/media" element={<PRPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/setting" element={<SettingPage />} />
          <Route path="/claim" element={<ClaimerPage />} />
          <Route path="*" element={<Navigate to="/landing-page" />} />
        </Routes>
        <Container><TFTFooter background="linear-gradient(90deg, transparent, #132b3f, transparent)" /></Container>
      </ThemeProvider>
    </I18nProvider>
  );
}
