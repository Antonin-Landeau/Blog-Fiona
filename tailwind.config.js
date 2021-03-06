/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#89BEC9',
        'secondary-color': '#FFD4F2',
        'creamy-white': '#FDFBE4',
        'purple': '#77536F',
        'black-overlay-from': 'rgba(0, 0, 0, 0.69)',
        'black-overlay-to': 'rgba(0, 0, 0, 0.43)',
        'paragraph-color': '#2a303b',
      },
      backgroundImage: {
        'presentation-section': "url('../public/bg-presentation-section.png')"
      }
    },
    fontFamily: {
      title: ['Lobster', 'cursive']
    }
  },
  plugins: [],
}
