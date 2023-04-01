/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px',
      fk:'2160px'
    },
    extend: {
      colors:{
        brightRed: '#E10600',
        brightRedLight: '#FF0000',
        brightRedSupLight: '#FF2B20',
        darkBlue:'#191970',
        darkGrayishBlue:'#473d8a',
        verydarkblue:'#00008b',
        veryPaleRed :' #E78587',
        veryLightGray:'#CACACA'
      }
    },
  },
  plugins: [],
}

