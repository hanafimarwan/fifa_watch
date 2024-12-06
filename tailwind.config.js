/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*/*.{js,jsx}"
  ],
  theme: {
    extend: {
      backgroundColor:{
        main:"#000039a3",
      },
      backgroundImage: {
        'custom-pattern': "url('/src/imgs/background.jpg')",
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        slideRightOut: 'slideRightOut 0.5s forwards',
        slideLeftIn: 'slideLeftIn 0.5s forwards',
      },
      keyframes: {
        slideRightOut: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
        slideLeftIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      }
    },
  },
  plugins: [],
}

