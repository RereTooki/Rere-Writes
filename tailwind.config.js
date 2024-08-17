/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      vsm: "1px",
      md: "375px",
      xmd: "455px",
      tab: "565px",
      tabImg: "601px",
      lg: "750px",
      nxl: "800px",
      xl: "1100px",
    },

    extend: {
      colors: {
        whites: "hsl(0, 0%, 100%)", //Added s at the end of every name to avoid clashes
        clrgreen: "#4D96A8",
        generalClr: "#96A9C6",
        clrtransparentgreen: "rgb(77 150 168 / 0.8)",
        orange: "rgb(231 129 107)",
        rels: "linear-gradient(to right, #7F7FD5, #31B7C2)",
        lightCyans: "hsl(193, 18%, 86%)",
        "very-dark-black-blues": "hsl(240, 10%, 16%)",
        //Colours from my Results Component Project
        colorRed: "hsl(0, 100%, 67%)",
        colorOrange: "hsl(39, 100%, 56%)",
        colorGreen: "hsl(166, 100%, 37%)",
        colorCblue: "hsl(234, 85%, 45%)",
        gradSlateBlue: "hsl(252, 100%, 67%)",
        gradRoyalBlue: "hsl(241, 81%, 54%)",
        gradVioletBlue: "hsla(256, 72%, 46%, 1)",
        gradPersianBlue: "hsla(241, 72%, 46%, 0)",
        colorWhite: "hsl(0, 0%, 100%)",
        colorPaleBlue: "hsl(221, 100%, 96%)",
        colorLavender: "hsl(241, 100%, 89%)",
        colorDGrayBlue: "hsl(224, 30%, 27%)",
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
