/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Nunito Sans", "sans-serif"],
    },
    extend: {
      container: {
        "1xl": "max-width: 1440px",
      },
      colors: {
        gray: {
          450: "hsl(0,0%,52%)", // dark gray (light mode input)
        },
        blue: {
          960: "hsl(209,23%,22%)", // dark blue (dark mode elements)
          970: "hsl(207,26%,17%)", // very dark blue (dark mode bg)
          980: "hsl(200,15%,8%)", // very dark blue (light mode text)
        },
      },
    },
  },
  plugins: [],
};
