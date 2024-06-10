/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      nasaliza:["nasaliza","sans"],
    },
    extend: {
      borderRadius: {
      extraLarge:'12rem'
       }
     },
   },
  plugins: [],
}

