/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
    container: {
      center: true,
      screens: {
        lg: "1124",
        xl: "1124",
        "2xl": "1124",
      }
    }
  },
  plugins: [],
}
