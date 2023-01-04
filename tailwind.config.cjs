/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        gameofsquids: ["Game Of Squids", "sans-serif"],
        louisgeorgecafe: ["Louis George Cafe", "sans-serif"],
        retroica: ["Retroica", "sans-serif"],
        retron2000: ["Retron2000", "sans-serif"],
      }
    },
  },
  plugins: [require("flowbite/plugin")],
  important: true,
};
