/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      color: {
        'my-lblue': '#57FFFF',
        'my-dblue': '#3657EA'
      },
      fontFamily: {
        'brackets': 'Koulen'
      }
    },
  },
  plugins: [],
}

