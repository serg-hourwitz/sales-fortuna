/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        main: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        mainBg: "url('/public/main-bg.png')",
      },
      colors: {
        primary: '#000000',
        secondary: '#9B9A99',
        arrow: '#707070',
        quotes: '#C6C5C6',
        dotBlack: '#4B4B4B',
        dotLight: '#D9D9D9',
        borderCard: '#B6B1B1',
        borderArrow: '#D1CFCF',
      },
    },
  },
  plugins: [],
};
