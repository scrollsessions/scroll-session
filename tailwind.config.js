/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-image": "url('./assets/bg.png')",
      },
    },
  },
  plugins: [],
};
