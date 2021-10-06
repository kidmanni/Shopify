module.exports = {
  purge: {
    enabled: process.env.NODE_ENV && process.env.NODE_ENV === "production" ? true : false,
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
        "green-custom": "#7f9990",
        "button-action": "#c5616b",
        "light-green": "#DFE6E3"

      },
      fontFamily: {
        'sans': ['Source Sans Pro', 'sans-serif'],
        'crimson': ['Raleway', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}