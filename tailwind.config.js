import defaultTheme from "tailwindcss/defaultTheme";
export default {
  theme: {
    extend: {
      colors: {
        primary: defaultTheme.colors.green,
        cleverYellow: "#f2b722",
        cleverGreen: "#47C00E",
        cleverBlack: "#05102C",
        cleverText: "#052543",
      },
      fontFamily: {
        title: ["Montserrat", "cursive"],
        text: ["Poppins", "sans-serif"],
      },
    },
  },
};
