/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'backgroundBanner': "url('/src/assets/back.png')",
       
      }
    },
  },
  plugins: [],
}