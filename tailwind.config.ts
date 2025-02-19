/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00a99d",
        secondary: "#005a54",
        accent: "#f8f8f8",
        darkGray: "#333",
        lightGray: "#f2f2f2",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
