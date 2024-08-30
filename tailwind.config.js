/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable sort-keys */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#0067FF'
      },
      borderColor: {
        'layout-border': '#88888844',
      },
      colors: {
        'primary': '#0067FF'
      },
      height: {
        '112': '28rem',
        '128': '32rem'
      },
      margin: {
        '128': '32rem'
      },
      marginTop: {
        '128': '32rem'
      },
      maxHeight: {
          '112': '28rem',
          '128': '32rem'
      }
    },
    screens: {
      'sm': '600px',
      // => @media (min-width: 640px) { ... }

      'md': '720px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  // plugins: [],
};

