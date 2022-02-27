const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: '#193766',
        'dark-light': '#2B4772',
        muted: '#697B98',
        primary: '#3B82F6',
        'primary-light': '#C6DBFF',
        secondary: '#E4EFFF',
      },
      width: {
        '600px': '600px',
        '537px': '537px',
      },
      height: {
        '600px': '600px',
        '364px': '364px',
      },
    },
    container: {
      center: true,
      screens: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}
