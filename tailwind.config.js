module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand:"#b99656",
        "brand-border": "#aa8746",
        "brand-light": "#fffaeb",
        "neutral-header": "#7E7E7E",
        "neutral-text": "#7e7e7e",
        "background-light" : "#f7f7f7"
      },
      spacing: {
        116: '32rem',
        132: '40rem',
        140: '44rem'
      },
      fontFamily: {
        'fancy': ['Noto Serif TC', 'serif'],
        'body': ['Lato', 'sans-serif']
      },
      letterSpacing: {
        header: '.3rem',
        subHeader: '.1rem',
        text: '.04rem'
       }
     
    },
  },
  variants: {
    extend: {
      translate: ['active'],
      transform: ['active']
    },
  },
  plugins: [],
}
