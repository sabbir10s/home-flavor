module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    fontFamily: {
      'sans': ['Poppins'],
      'mono': ['Oswald'],
    },

  },

  plugins: [require("daisyui")],
}
