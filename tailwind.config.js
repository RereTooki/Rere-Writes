/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      vsm: "1px",
      md: "375px",
      tab: "565px",
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
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        overpass: ["Overpass", "sans-serif"],
      },
    },
  },
  plugins: [],
};
