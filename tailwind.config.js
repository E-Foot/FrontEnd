/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'second_font': '#5A5A5A',
        'green_button': '#51A306',
        'secondary': '#FF2882',
        'primary': '#34173D',
        'links': '#00A3FF'
      },
    },
    
  },
  plugins: [],
}