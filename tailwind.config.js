module.exports = {
  purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": 'rgba(255, 255, 255, 0.18)'
      },
    },
    listStyleImage: {
      checkmark: 'url("./public/icons/check-mark.svg")',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
