"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";

type Locale = "en" | "ar";

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  direction: "ltr" | "rtl";
  t: (key: string) => string;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

// Simple translation function
const translations = {
  en: {
    "navigation.investments": "INVESTMENTS",
    "navigation.payment": "PAYMENT",
    "navigation.signals": "SIGNALS",
    "navigation.education": "EDUCATION",
    "navigation.signIn": "SIGN IN",
    "navigation.signUp": "SIGN UP",
    "hero.title": "Welcome to Finova",
    "hero.description": "Your trusted partner in financial growth",
  },
  ar: {
    "navigation.investments": "الاستثمارات",
    "navigation.payment": "الدفع",
    "navigation.signals": "الإشارات",
    "navigation.education": "التعليم",
    "navigation.signIn": "تسجيل الدخول",
    "navigation.signUp": "إنشاء حساب",
    "hero.title": "مرحباً بك في فينوفا",
    "hero.description": "شريكك الموثوق في النمو المالي",
  },
};

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    // Load locale from localStorage on mount
    const savedLocale = localStorage.getItem("locale") as Locale;
    if (savedLocale && ["en", "ar"].includes(savedLocale)) {
      setLocaleState(savedLocale);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
    // Update document direction
    document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLocale;
  };

  const direction = locale === "ar" ? "rtl" : "ltr";

  const t = (key: string): string => {
    return (
      translations[locale][key as keyof (typeof translations)[typeof locale]] ||
      key
    );
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, direction, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}
