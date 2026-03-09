export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#d4af37', // Luxurious gold
        secondary: '#8b7355', // Copper/bronze
        dark: '#0a0a0a', // Deep dark background
        luxe: {
          dark: '#1a1a1a',
          text: '#f5f5f5',
          accent: '#d4af37',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'hero-luxury': "linear-gradient(135deg, rgba(10, 10, 10, 0.4) 0%, rgba(26, 26, 26, 0.6) 100%)",
      }
    },
  },
  plugins: [],
}
