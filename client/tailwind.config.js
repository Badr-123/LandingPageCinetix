module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Hind Siliguri',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '30px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1170px',
    },
    extend: {
      zIndex: {
        '5': '5',
      },
      boxShadow: {
        'inner-right': 'inset -10px 0px 10px -10px rgba(0, 0, 0, 0.75)',
        'inner-left': 'inset 10px 0px 10px -10px rgba(0, 0, 0, 0.75)',
      },
      
      colors: {
        dark: '#292830',
        light: '#BDBDBD',
        accent: '#FF7235',
        accentHover: '#e05216',
        grey: '#F5F5F5',
      },
      backgroundImage: {
        overview: "url('/src/assets/img/overview/bg.svg')",
        cta: "url('/src/assets/img/cta/bg.svg')",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.shadow-inner-right': {
          boxShadow: 'var(--box-shadow-inner-right)',
          '.shadow-inner-left': {
            boxShadow: 'var(--box-shadow-inner-left)',
          },
        },
      });
    },
  ],
};