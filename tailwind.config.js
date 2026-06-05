/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/beispiel/coaching/**/*.{ts,tsx}',
    './app/fabian-coaching/**/*.{ts,tsx}',
    './app/fabian-coaching-hell/**/*.{ts,tsx}',
    './app/coach-eddy/**/*.{ts,tsx}',
    './app/naturheilpraxis-brenscheidt/**/*.{ts,tsx}',
    './app/michael-mbr/**/*.{ts,tsx}',
    './components/coaching/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        '4.5': '1.125rem',
      },
      colors: {
        /* ── Naturheilpraxis Brenscheidt brand palette ── */
        'brand-beige':    '#fdfbf7',
        'brand-cream':    '#faf5eb',
        'brand-sage':     '#384d41',
        'brand-sage-light': '#5f7468',
        'brand-sage-pale':  '#e6ede9',
        'brand-terracotta': '#c57b64',
        'brand-charcoal':   '#252b28',
        /* ── existing ── */
        'brand-blue': {
          50:  '#f0f7ff',
          100: '#e0f0fe',
          500: '#1d4ed8',
          600: '#1e40af',
          700: '#0369a1',
        },
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
