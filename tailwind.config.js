/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          800: '#133559',
          900: '#0f2b48',
          950: '#091c31',
        },
        medical: {
          blue: '#0284c7',
          dark: '#0369a1',
          light: '#e0f2fe',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Noto Sans Devanagari', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
