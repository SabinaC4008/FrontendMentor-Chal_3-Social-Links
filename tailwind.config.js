/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./social-links-profile-main/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Inter: ['Inter', "sans-serif"],
      },
      colors:{
        'yellow-green': '#C5F82A',
        'light-gray': '#333333', 
        'gray-base': '#1f1f1f', 
        'deep-gray': '#141414',
      },
      width: {
        '89': '89%',
        '90': '365px',
      },
    },
  },
  plugins: [],
}

