/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0C5F79",
        secondary: "#1DBEE1",
        secondaryLight: "#e7e7e7",
        tretiary: "#5edaeb",
        dark: "#08151D",
        grey: "#F0F0F0",
        "grey-light": "#F6F6F6",
      },
    },
    screens: {
      xs: "300px",

      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",
    },
  },
  plugins: [],
};
