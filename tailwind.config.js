module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    fontFamily: {
      Yantramanav: ["Yantramanav", "sans-serif"],
      WorkSans: ["Work Sans", "sans-serif"],
    },

    extend: {
      colors: {
        blue: "#4376F9",
        primary: "#2A2B2D",
        secondary: "#A8A6B0",
      },
    },
  },
  plugins: [],
};
