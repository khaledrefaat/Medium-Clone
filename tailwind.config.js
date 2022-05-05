module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          lg: '4rem',
          xl: '6rem',
          '2xl': '8rem',
        },
      },
      maxWidth: {
        xs: '18rem',
      },
    },
  },
  plugins: [],
};
