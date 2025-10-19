import localFont from "next/font/local";

export const primaryFont = localFont({
  src: [
    {
      path: "../assets/fonts/IRANYekanXFaNum/IRANYekanXFaNum-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/IRANYekanXFaNum/IRANYekanXFaNum-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/IRANYekanXFaNum/IRANYekanXFaNum-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/IRANYekanXFaNum/IRANYekanXFaNum-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-iranyekan",
  fallback: ["Arial", "Helvetica Neue", "sans-serif"],
  display: "swap",
});
