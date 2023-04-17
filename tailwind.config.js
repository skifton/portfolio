/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Source Code Pro', 'regular']
      },
      animation: {
        'fade-in-down': 'fadeInDown 1s ease-out',
      },
      keyframes: {
        bounceIn: {
          '0%': { opacity: 0, transform: 'scale(.3)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
          '70%': { transform: 'scale(.9)' },
          '100%': { transform: 'scale(1)' }
        },
        fadeInDown: {
          '0%': {
              opacity: '0',
              transform: 'translateY(-10px)'
          },
          '100%': {
              opacity: '1',
              transform: 'translateY(0)'
          },
      },
      }
    },
  },
  plugins: [],
}

