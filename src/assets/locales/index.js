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

import { i18n } from "@lingui/core";
import { de, en, es, fr, it, ru, zh, ko, el, id } from "make-plural/plurals";

export const locales = [
  { locale: "en", plurals: en },
  { locale: "fr", plurals: fr },
  { locale: "de", plurals: de },
  { locale: "es", plurals: es },
  { locale: "it", plurals: it },
  { locale: "zh", plurals: zh },
  { locale: "ko", plurals: ko },
  // { locale: "pl", plurals: pl },
  { locale: "ru", plurals: ru },
  { locale: "el", plurals: el },
  { locale: "id", plurals: id },
];

locales.map((item) => {
  i18n.loadLocaleData(item.locale, { plurals: item.plurals });
});

export async function fetchLocale(locale = "en") {
  console.log("fetchLocale", locale);
  const { messages } = await import(`./${locale}/messages`);
  i18n.load(locale, messages);
  i18n.activate(locale);
}

export function selectLocale(locale) {
  console.log("selectLocale", locale);
  window.localStorage.setItem("locale", locale);
  return fetchLocale(locale);
}
export function initLocale() {
  let locale = window.localStorage.getItem("locale");
  if (!locale || locales.indexOf(locale) === -1)
    locale = "en";
  fetchLocale(locale);
}
