module.exports = {
  theme: {
    container: {
      center: true,
      padding: "1rem",
      maxWidth: "1919px",
    },
    extend:{}
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("@tailwindcss/typography")],
};
