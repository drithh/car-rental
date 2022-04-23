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
      Outfit: ["Outfit", "sans-serif"],
    },

    extend: {
      colors: {
        blue: "#4376F9",
        primary: "#2A2B2D",
        secondary: "#A8A6B0",
        gray: "#F6F7F9",
        dark: "#292C2D",
        cream: "#F5F5F5",
        darkencream: "#FDFDFD",
      },
      animation: {
        "scale-bounce-enter": "scaleBounceEnter 0.5s linear",
        "scale-bounce-leave": "scaleBounceLeave 0.4s linear",
      },
      keyframes: {
        scaleBounceEnter: {
          "0%": { transform: "scale(0)" },
          "70%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        scaleBounceLeave: {
          "0%": { transform: "scale(1)" },
          "30%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(0)" },
        },
      },
    },
  },
  plugins: [],
};
