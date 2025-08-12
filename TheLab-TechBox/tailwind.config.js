/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./**/*.razor"
  ],
  theme: {
    extend: {
      colors: {
        'tech-blue': '#0ea5e9',
        'tech-dark': '#0f172a',
        'tech-gray': '#64748b',
        'tech-accent': '#f59e0b'
      },
      fontFamily: {
        'greek': ['Arial', 'Helvetica', 'sans-serif']
      },
      width: {
        '3/10': '30%',
        '7/10': '70%'
      },
      animation: {
        'slide-in': 'slideIn 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'bounce-in': 'bounceIn 0.8s ease-out',
        'photo-transition': 'photoTransition 2s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
