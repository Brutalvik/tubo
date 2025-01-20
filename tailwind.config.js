const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Include your project's source files
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}", // Include HeroUI theme files
  ],
  theme: {
    extend: {
      colors: {
        cardBackground: "#1f2020",
        cardHover: "#2D2C2C",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
