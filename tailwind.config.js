/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      backgroundImage: theme =>({
        'lego-block': 'url(/img/bq.png)',
        'lego-block-down': 'url(/img/bq-upside-down.png)',
        'lego-block-down-pink': 'url(/img/bq-upside-down-pink.png)',
        'lego-block-down-blue': 'url(/img/bq-upside-down-blue.png)',
        'red-bg': 'url(/img/red-background.webp)',
        'character-1': 'url(/img/character-1.png)',
      }),
      backgroundColor: theme => ({
        'lego-red': 'rgb(227, 0, 10)'
      }),
      screens: theme =>({
        'xsm': '450px'
      })
    },
  },
  plugins: [],
}

