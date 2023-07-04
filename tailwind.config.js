/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'DarkBlue' /*(Dark Mode Elements)*/: 'hsl(209, 23%, 22%)',
        'VeryDarkBlueD'/*(Dark Mode Background)*/: 'hsl(207, 26%, 17%)',
        'VeryDarkBlueL' /*(Light Mode Text)*/: 'hsl(200, 15%, 8%)',
        'DarkGray' /*(Light Mode Input)*/: 'hsl(0, 0%, 52%)',
        'VeryLightGray' /*(Light Mode Background)*/: 'hsl(0, 0%, 98%)',
        'White' /*(Dark Mode Text & Light Mode Elements)*/:' hsl(0, 0%, 100%)',
      },
      screens: {
        'mobile' : {'max' : '800px'},
      }
    },
    fontFamily: {
      'nunito' : ['Nunito Sans', 'sans-serif']
    },
  },
  plugins: [],
}

