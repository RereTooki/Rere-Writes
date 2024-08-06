/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      vsm: "1px",
      md: "375px",
      tab: "565px",
      tabImg: "601px",
      lg: "750px",
      nxl: "800px",
      xl: "1110px",
    },

    extend: {
      colors: {
        whites: "hsl(0, 0%, 100%)", //Added s at the end of every name to avoid clashes
        clrgreen: "#4D96A9",
        clrtransparentgreen: "rgb(77 150 168 / 0.8)",
        orange: "rgb(231 129 107)",
        rels: "linear-gradient(to right, #7F7FD5, #31B7C2)",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        overpass: ["Overpass", "sans-serif"],
      },
      boxShadow: {
        gradientborder: "0 0 0 3px #7F7FD5, 0 0 0 3px #31B7C2",
      },
      backgroundImage: {
        underlinegradient: "linear-gradient(to right, #7F7FD5, #31B7C2)",
        poem1BG: "url('./src/assets/images/poem1Bg.jpg')",
      },
    },
  },
  plugins: [],
};
