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
        "light-primary-bg": "#bd5c38",
        "light-primary-text": "#FFFFFF",
        "light-primary-hover": "#bf775d",
        "dark-primary-bg": "#171c28",
        "dark-primary-text": "#ffffff",
        "dark-primary-hover": "#5D3FD3",
        "walnuted-bg-from": "#54b948",
        "walnuted-bg-to": "#000000",
      },
    },
  },
  plugins: [],
};
