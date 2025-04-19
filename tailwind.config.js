/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        softBlack: {
          DEFAULT: '#1a1a1a',
          light: '#ffffff',
        },
        mintGreen: {
          DEFAULT: '#4ade80',
          light: '#22c55e',
        },
        mintGreenLight: {
          DEFAULT: '#86efac',
          light: '#4ade80',
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      }
    }
  },
  plugins: [],
}