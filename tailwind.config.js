/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gameofsquids: ["Game Of Squids", "sans-serif"],
        louisgeorgecafe: ["Louis George Cafe", "sans-serif"],
        retroica: ["Retroica", "sans-serif"],
        retron2000: ["Retron2000", "sans-serif"],
      },
    },
  },
  plugins: [],
};
