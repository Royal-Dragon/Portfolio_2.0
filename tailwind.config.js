/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "oklch(17.76% 0 0)",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "oklch(17.76% 0 0)",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "custom-background": "oklch(17.76% 0 0)", 
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      
    },
  },
  plugins: [],
};