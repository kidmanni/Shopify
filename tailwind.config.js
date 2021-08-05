module.exports = {
  purge: {
    enabled: false,
    content: [
      './layout/*.liquid',
      './templates/*.liquid',
      './sections/*.liquid',
      './snippets/*.liquid',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "white-custom": "#fefdfe",
        "blue-custom": "#49a7cd",
        "purple-custom": "#6f49cd",
        "purple-light-custom": "#ae99e3",
        "salmon-custom": "#cd4965",
        "salmon-light-custom": "#e6aebd",
        "menu-red-custom": "#D2C6D4"
        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}