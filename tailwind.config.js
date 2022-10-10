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
        'creamy-white': '#fafafa',
        'purple': '#77536F',
        'black-overlay-from': 'rgba(0, 0, 0, 0.69)',
        'black-overlay-to': 'rgba(0, 0, 0, 0.43)',
        'text-color': '#191818',
      },
      backgroundImage: {
        'presentation-section': "url('../public/background/ANCLAJE-Topo_Bleu.svg')"
      }
    },
    fontFamily: {
      title: ['Lobster', 'cursive']
    }
  },
  plugins: [],
}
