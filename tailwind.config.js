/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'base-color': '#6917B5',
      'logo-footer': 'hsla(271,36%,57%,1)',
      'base-color-new': '#814ACF',
      'base-color-second': '#E1CDF4',
      'base-color-alt': '#562484',
      'title-color': '#1A0F24',
      'text-color': '#757575',
      'text-color-light': '#FAFAFA',
      'body-color': '#F7F7F7',
      'border-color': '#00000033',
      'transparent': 'transparent',
    },
    fontSize: {
      'title-font-size': '1.875rem',
    },
    extend: {
      height: {
        '18': '4.5rem',
      },
      fontSize: {
        'logo': '1.31rem',
        'title': '1.6rem',
      },
      backgroundImage: {
        'linear': 'linear-gradient(270deg,#814ACF 0%,#6917B5 100%)',
        'linear-li': 'linear-gradient(152deg,#814ACF 0%,#6917B5 100%)',
        'menu': 'linear-gradient(0deg,#814ACF 0%,#6917B5 100%)',
        'button': 'linear-gradient(162deg,#6917B5 0%,#814ACF 100%)',
        'circle': 'linear-gradient(circle at 0%, #814ACF, #6917B5)',
        'divider': 'linear-gradient(270deg, hsla(271,36%,57%,1), hsla(271,100%,50%,0.34))',
        'divider-2': 'linear-gradient(270deg,hsla(271,100%,50%,0.34), hsla(271,36%,57%,1))',
      },
      width: {
        '0%': '0%',
      },
      transitionProperty: {
        'width': 'width',
        'background': 'background'
      },
      fontFamily: {
        'roboto':"'Roboto', sans-serif"
      },
      boxShadow: {
        'header': '0px 0px 12px rgba(0,0,0,0.5)',
      },
      keyframes: {
        'cursor': {
          '50%': {'opacity': '0'}
        }
      },
      animation: {
        'cursor': 'cursor 1.1s infinite step-start'
      },
    },
  },
  plugins: [],
}

/**
 * optional base-color-new
 * #4AA2CF
 */

