module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    fontFamily: {
      NunitoSans: ['Nunito Sans', 'sans-serif'],
      Inter: ['Inter', 'sans-serif'],
    },
    colors: {
      black: '#010505',
      green: '#1A8078',
      orange: '#FF7967',
      white: '#FFFFFF',
      purple: '#5E4366',
      lightgreen: '#E7F9FD',
    },
    extend: {},
  },
  plugins: [],
};
