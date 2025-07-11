/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#144E7A",
        secondary: "#FF9A33",
        minaWhite: "#FFFFFF",
        minaBlack: "#000000",
        minaGray: "#666666",
        minaLightGray: "#CCCCCC",
      },
      fontFamily: {
        mina: ["Avenir", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}

