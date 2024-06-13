/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        stringCyan: "hsl(171,66%,44%)",
        lightblue: "hsl(233,100%,69%)",
        darkGrayishBlue: "hsl(210,10%,33%)",
        grayishBllue: "hsl(201,11%,66%)",
      },
    },
  },
  plugins: [],
};
