/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      vsm: "1px",
      sm: "375px",
      nsm: "600px",
      md: "376px",
      lg: "565px",
      nxl: "800px",
      xl: "1110px",
    },

    extend: {
      colors: {
        whites: "hsl(0, 0%, 100%)", //Added s at the end of every name to avoid clashes
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        overpass: ["Overpass", "sans-serif"],
      },
    },
  },
  plugins: [],
};
