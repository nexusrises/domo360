/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nexus-dark': '#0b0f19',
        'nexus-accent': '#3b82f6', // Un azul brillante estilo neón
        'nexus-purple': '#8b5cf6',
      }
    },
  },
  plugins: [],
}
