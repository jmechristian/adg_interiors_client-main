/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    maxWidth: {
      '1/3': '40%',
    },
    minWidth: {
      '2/3': '60%',
    },
    extend: {
      colors: {
        brand: '#d50057',
        'brand-light-gray': '#e6e6e6',
      },
      fontFamily: {
        'brand-book': 'Gotham Book',
        'brand-bold': 'Gotham Bold',
        'brand-serif': 'orpheuspro',
      },
      container: {
        screens: {
          sm: '1240px',
          md: '1240px',
          lg: '1240px',
          xl: '1240px',
          '2xl': '1240px',
        },
      },
      lineHeight: {
        slight: '1.25',
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
