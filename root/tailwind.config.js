module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'phone': '0px',
      'medium-mobile': '375px',
      'large-mobile': '426px',
      'tablet': '780px',
      'laptop': '1200px',
      'desktop': '1480px',
      'large-desktop': '2560px'
    },
    extend: {
      colors: {
        brand:"#b99656",
        "brand-border": "#aa8746",
        "brand-light": "#fffaeb",
        "brand-lighter": "#FFA500",
        "neutral-header": "#7E7E7E",
        "neutral-text": "#7e7e7e",
        "background-light" : "#f7f7f7",
        "custom" : "#E1E1E1",
        "icon-hover": "#333333"
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
        tabletHeader: '.1rem',
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
