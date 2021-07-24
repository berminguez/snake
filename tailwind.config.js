module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      primary: '#138A14',
      secondary: '#105310',
      customblack: '#050505',
      customwhite: '#ffffff',
      boardbg: '#0E0E0E',
      apple: 'red',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
