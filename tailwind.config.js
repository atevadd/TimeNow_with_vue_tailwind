// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#141414",
      "grey-100": "#6e7c8a",
      "dark-blue": "#1d1b67",
      "light-blue": "#46ccde",
      "accent-blue": "#cdf9ff",
      "dark-green": "#005661",
      "grey-200": "#5e6d7c",
      "dark-blue-200": "#3b60bf",
      "b-color": "#c3c3c3",
    },
    fontFamily: {
      "font-inherit": "inherit",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
