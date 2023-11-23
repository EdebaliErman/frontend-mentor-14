/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    },
    extend:{
      colors:{
       cyan:"#2ab2af",
       aqua:"#4abebd",
       brightYellow:"#c0df34",
       background:"#e5eff5",
       text:"#98a6bd"
      },
      fontFamily:{
        'karla': ['Karla', 'sans-serif']
      }
    }
  },
  plugins: [],
}

