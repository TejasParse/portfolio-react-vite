/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brown-bg": "#bd5c38",
        "light-brown-bg": "#bf775d",
      },
    },
  },
  plugins: [],
};
