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
          orange: "#FF5E3A",
          pink: "#FF2A6D",
          violet: "#8B5CF6",
          purple: "#7C3AED",
          dark: "#0B0F19",
          card: "#111827",
          border: "#1F2937",
          muted: "#9CA3AF"
        }
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #FF5E3A 0%, #FF2A6D 50%, #8B5CF6 100%)',
        'brand-gradient-hover': 'linear-gradient(135deg, #FF6F4E 0%, #FF3D7C 50%, #9D71F8 100%)',
        'brand-gradient-subtle': 'linear-gradient(135deg, rgba(255, 94, 58, 0.1) 0%, rgba(255, 42, 109, 0.1) 50%, rgba(139, 92, 246, 0.1) 100%)',
      },
      boxShadow: {
        'brand-glow': '0 0 25px -5px rgba(255, 42, 109, 0.35)',
        'card-glow': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
