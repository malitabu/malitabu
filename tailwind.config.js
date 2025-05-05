/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf8f6',
          100: '#f9ebe5',
          200: '#f5d8cf',
          300: '#ebbcac',
          400: '#e39c85',
          500: '#d67e60',
          600: '#c45f40',
          700: '#a44b33',
          800: '#87402f',
          900: '#723a2d',
        },
        secondary: {
          50: '#f7f7f5',
          100: '#e6e4de',
          200: '#d2cec3',
          300: '#b9b3a3',
          400: '#a39a86',
          500: '#8d836e',
          600: '#746c5a',
          700: '#5e574a',
          800: '#4d4840',
          900: '#423f39',
        },
        accent: {
          50: '#fbf7f1',
          100: '#f5ebdc',
          200: '#ead6b7',
          300: '#debb8a',
          400: '#d2a062',
          500: '#c68742',
          600: '#b06d35',
          700: '#92552d',
          800: '#79462b',
          900: '#673c27',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-in-out',
        'fade-up': 'fadeUp 0.7s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};