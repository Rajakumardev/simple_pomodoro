/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#483A58"
        },
        accent: {
          900: "#241d2c"
        }
      }
    },
  },
  plugins: [],
}

