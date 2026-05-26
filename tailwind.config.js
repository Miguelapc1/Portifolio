/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        surface: {
          DEFAULT: '#0a0a0a',
          1: '#111111',
          2: '#161616',
          3: '#1c1c1c',
          4: '#222222',
        },
        border: {
          DEFAULT: '#2a2a2a',
          subtle: '#1e1e1e',
        },
        text: {
          primary: '#f0f0f0',
          secondary: '#a0a0a0',
          muted: '#606060',
          accent: '#e8e8e8',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'line-grow': 'lineGrow 1s ease forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(24px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        lineGrow: {
          from: { height: 0 },
          to: { height: '100%' },
        },
      },
    },
  },
  plugins: [],
}
