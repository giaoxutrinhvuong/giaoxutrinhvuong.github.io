const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*/*.{html,svelte,css}"],
  theme: {
    extend: {
    },
    fontFamily: {
      serif: '"Noto Serif"',
      sans: '"Noto Sans"',
    },
  },
  plugins: [],
}

