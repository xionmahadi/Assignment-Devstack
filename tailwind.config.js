/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FF5429",
          pink: "#F12067",
          violet: "#9033FA",
        }
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #FF5429 0%, #F12067 50%, #9033FA 100%)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
