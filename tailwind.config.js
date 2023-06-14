/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#030807"
        },
        accent: {
          900: "#47FFDD"
        }
      }
    },
  },
  plugins: [],
}

