/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        'forest-dark':  '#1B3B36',
        'forest-green': '#2D5A4F',
        'mint-light':   '#7FB069',
        'cream-white':  '#FEFDF8',
        'warm-beige':   '#F7F3E9',
        'copper-accent':'#B5651D',
        'sage-muted':   '#A8B5A0',
      },
      fontFamily: {
        sans: ['Poppins','system-ui','sans-serif'],
      },
    },
  },
  plugins: [],
}
