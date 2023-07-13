/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#363FC3",
        secondary: "#5900B8",
        text: "#1D3451",
        gray: {
          bg: "#F2F5F9",
        },
        purpleT: { primary: "#5900B8", secondary: "#C199E8", terciary: "#EFDCFF" },
      },

      fontFamily: {
        display: ["Montserrat"],
        montserrat: ["Montserrat"],
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      fontSize: {
        xs: "0.625rem",
        sm: "0.812rem",
        base: "1rem",
        md: "1rem",
        lg: "1.250rem",
        xl: "1.562rem",
        "2xl": "1.938rem",
        "3xl": "2.438rem",
        "4xl": "3.062rem",
        "5xl": "3.812rem",
      },
      minHeight: {
        ...defaultTheme.height,
      },
      minWidth: {
        ...defaultTheme.width,
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
}
