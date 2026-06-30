/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './data/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#17324d',
          light: '#245f8f',
          dark: '#0b1f33',
        },
        accent: {
          DEFAULT: '#d99a25',
          light: '#f2c66d',
        },
        ink: '#111827',
        paper: '#f7f8f5',
        moss: '#48624b',
      },
      fontFamily: {
        sans: ['Poppins', 'Segoe UI', 'Arial', 'sans-serif'],
        serif: ['Poppins', 'Segoe UI', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
}
