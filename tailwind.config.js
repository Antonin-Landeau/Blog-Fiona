/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'presentation-section': "url('../public/bg-presentation-section.jpg')"
      }
    },
    fontFamily: {
      title: ['Lobster', 'cursive']
    }
  },
  plugins: [],
}
