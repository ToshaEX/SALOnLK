/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // prefix:"tw-",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      white: "#fff",
      black: "#000",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      primary: "#273444",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      backgroundImage: {
        "hero-image": "url('./assets/hero.jpg')",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".btn-primary": {
          backgroundColor: "transparent",
          borderRadius: "5px",
          padding: "10px",
          border: "2px solid #fff",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#2779bd",
          },
        },
      });
    }),
    require("@tailwindcss/forms"),
  ],
};
