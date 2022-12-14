/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-deep': '#818182',
        'black-opacity': 'rgba(0,0,0,0.8)'
      }
    },
  },
  plugins: [],
  important: true,
}
