module.exports = {
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xl: "1280px", 
      },
    },
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("@tailwindcss/typography")],
};
