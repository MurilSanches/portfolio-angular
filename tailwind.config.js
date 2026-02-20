/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,ts,css}'],
  theme: {
    extend: {
      colors: {
        night: {
          950: '#0a0c0b',
          900: '#0f1412',
          800: '#171f1c'
        },
        fog: {
          50: '#f6f6f4',
          100: '#efefe9',
          200: '#d9d9cf'
        },
        ember: {
          500: '#d97706',
          600: '#b45309'
        },
        blood: {
          700: '#991b1b'
        }
      },
      boxShadow: {
        soft: '0 10px 25px rgba(0,0,0,0.12)',
        deep: '0 18px 45px rgba(0,0,0,0.24)'
      }
    }
  },
  plugins: []
}

