module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '140': '140%'
      }
    },
    fontFamily: {
      'sans': ['Roboto-Regular'],
      'bebas': ['BebasNeue-Regular'],
    }
  },
  variants: {
    extend: {
      margin: ['last']
    },
  },
  plugins: [],
}
