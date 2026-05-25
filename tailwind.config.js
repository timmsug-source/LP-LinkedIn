/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/coaching/**/*.{ts,tsx}',
    './components/coaching/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#fefcf6',
          100: '#fdf5e2',
          500: '#e5a034',
          600: '#ca851d',
          700: '#a46714',
          900: '#5c3506',
          950: '#2d1a03',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        mono:    ['JetBrains Mono', 'ui-monospace', 'monospace'],
        sans:    ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // ← kein CSS-Reset, bestehende Styles bleiben unangetastet
  },
}
