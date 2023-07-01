/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/discord clone/src/assets/bannerMain.svg')",
      },
      boxShadow: {
        shadowHover: '0px 10px 30px 3px rgba(0, 0, 0, 0.3)',
      },
      colors: {
        primary: '#1D203E',
        secondary: '#2C2F48',
        dimWhite: 'rgba(255, 255, 255, 0.55)',
        dimWiteMore: 'rgba(255, 255, 255, 0.25)',
        dimPurble: '#2c2f4881',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
