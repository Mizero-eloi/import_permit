/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.js', './src/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'ui-sans-serif', 'system-ui'],
      }
    }
  },
  plugins: [],
}

