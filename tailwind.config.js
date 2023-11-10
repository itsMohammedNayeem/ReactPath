/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      inherit: 'inherit',
      transparent: 'transparent',
      primary: {
        DEFAULT: '#000',
        container: '#f1f1f1',
        alpha12: '#0000001f',
        200: '#e7e7e7',
        400: '#b2b2b2',
        500: '#929292',
        900: '#191919'
      },
      secondary: {
        DEFAULT: '#8fd6e5',
        lite: '#e2f5f9',
        dark: '#317986',
        alpha40: '#8fd6e566',
        400: '#50bcd2',
        100: '#b8e7f0'
      },
      success: {
        DEFAULT: '#67e077',
        container: '#c3f1c6',
        900: '#007a00',
        snackbarTimer: '#90b993'
      },
      error: {
        DEFAULT: '#ff6b6d',
        container: '#ffccd2',
        900: '#d1000d',
        snackbarTimer: '#ad666e'
      },
      info: { DEFAULT: '#60b4ff', container: '#bbddff' },
      warning: { DEFAULT: '#f9d647', container: '#fcecb1' },
      white: { DEFAULT: '#fff', alpha80: '#ffffffcc', off: '#fafafa' },
      gray: {
        DEFAULT: '#383838',
        light: '#f8f8f8',
        lightAlpha: '#f8f8f89b',
        main: '#8b97a6',
        dark: '#6a6a6a',
        outline: '#d6d6d6',
        surfaces: '#ebebeb',
        smoke: '#f6f6f6',
        100: '#cfcfcf',
        pale: '#f4f4f4',
        megaDark: '#9e9e9e',
        85: '#d9d9d9'
      },
      cyan: {
        light: '#69c7da'
      },
      fuchsia: { DEFAULT: '#ff0096' },
      tigeria: { DEFAULT: '#fe7300' },
      blue: {
        navy: '#04115a'
      }
    },
    extend: {
      fontFamily: {
        basefont: ['TT Commons', 'Arial Nova']
      },
      boxShadow: {
        1: '0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)',
        2: '0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)',
        3: '0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)',
        6: '0px -3px 6px rgba(0, 0, 0, 0.06)',
        7: '0px 3px 6px rgba(0, 0, 0, 0.06)'
      },
      keyframes: {
        'loading-logo': {
          '0%': {
            opacity: 1,
            transform: 'scale(1, 1)'
          },
          '40%': {
            opacity: 1,
            transform: 'scale(1, 1)'
          },
          '50%': {
            opacity: 0.4,
            transform: 'scale(0.94, 0.94)'
          },
          '75%': {
            opacity: 0.8,
            transform: 'scale(0.97, 0.97)'
          }
        },
        'loading-bar': {
          '0%': {
            transform: 'scaleY(1)',
            opacity: 1
          },
          '20%': {
            transform: 'scaleY(0.3)',
            opacity: 0.1
          },
          '50%': {
            transform: 'scaleY(0.8)'
          },
          '75%': {
            transform: 'scaleY(0.9)',
            opacity: 0.2
          }
        },
        'snackbar-timer': {
          '100%': {
            transform: 'translateX(-100%)'
          }
        }
      },
      animation: {
        'loading-logo': 'loading-logo 2s linear 0s infinite',
        'loading-bar-left': 'loading-bar 1.3s linear 0.1s infinite',
        'loading-bar-middle': 'loading-bar 1.3s linear 0.3s infinite',
        'loading-bar-right': 'loading-bar 1.3s linear 0.4s infinite',
        snackbar: 'snackbar-timer 1s linear 0.1s'
      }
    }
  },
  plugins: []
}
