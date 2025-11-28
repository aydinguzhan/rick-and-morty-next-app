"use client";

import { createContext, useContext, useEffect, useState } from "react";
import en from "@/lang/en/common.json";
import tr from "@/lang/tr/common.json";

const languages = {
  en,
  tr,
} as const;

type Locale = keyof typeof languages;

type I18nContextType = {
  locale: Locale;
  setLocale: (lang: Locale) => void;
  t: (key: keyof typeof en) => string;
};

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  const setLocale = (lang: Locale) => {
    setLocaleState(lang);
    localStorage.setItem("locale", lang);
  };

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved && (saved === "en" || saved === "tr")) setLocaleState(saved);
  }, []);

  const t = (key: keyof typeof en) => {
    return languages[locale][key] || key;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => useContext(I18nContext)!;
