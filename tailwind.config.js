module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand:"#E9B949",
        "brand-light": "#fffaeb",
        "neutral-light": "#D3D3D3"
      },
      spacing: {
        116: '32rem',
        132: '40rem',
        140: '44rem'
      },
      fontFamily: {
        'fancy': ['Yellowtail']
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
