/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        brightRed: "#ff0000",
        brightRedLight: "#ff4d4d",
        brightRedSupLight: "#ff8080",
        darkBlue: "#0000ff",
        darkGrayishBlue: "#4d4d4d",
        veryDarkBlue: "#000033",
        veryPaleRed: "#ffcccc",
        veryLightGray: "#f2f2f2",
        clifford: "#da373d",
      },
    },
  },
  plugins: [],
};
