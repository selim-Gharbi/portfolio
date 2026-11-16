/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#090909",
        panel: "#111110",
        gold: "#C9A96E",
        champagne: "#E8D5B0"
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Manrope", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 55px rgba(201,169,110,.12)"
      }
    }
  },
  plugins: []
};