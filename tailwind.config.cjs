/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        retroica: ["Retroica", "sans-serif"],
        gameofsquids: ["Game Of Squids", "sans-serif"],
        retrons2000: ["Retrons2000", "sans-serif"],
        louisgeorgecafe: ["Louis George Cafe", "sans-serif"],
      }
    },
  },
  plugins: [],
};
