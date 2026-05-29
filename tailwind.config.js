/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A1128", // Midnight Blue
        surface: "#16213E",    // Lighter Navy
        metallic: "#F3E5AB",   // Vanilla / Light Gold
        cyan: "#D4AF37",       // Gold replacing cyan for accents
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Syncopate', 'Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
