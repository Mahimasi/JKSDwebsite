/** @type {import('tailwindcss').Config} */
import { PhoneIcon } from '@heroicons/react/outline';

const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {

      colors:{
        'blue' : colors.blue,
        'orange' : colors.orange
        
      },
      screens: {
        'custom': '850px', // Example custom breakpoint at 850px
      },
    colors: {
      backgound: "#f8f8eb",

      orange: "#FFA75C",
      cardscolor: "#eaf3ff"
    },
  },
  plugins: [],
}

}

      
