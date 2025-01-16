/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      colors: {
        'gold': '#FFD700',
        'brown': '#776B5D',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
