/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-blue': 'rgb(var(--color-neon-blue) / <alpha-value>)',
        'neon-pink': 'rgb(var(--color-neon-pink) / <alpha-value>)',
        'neon-green': 'rgb(var(--color-neon-green) / <alpha-value>)',
        'neon-purple': 'rgb(var(--color-neon-purple) / <alpha-value>)',
        'space': 'rgb(var(--color-space) / <alpha-value>)',
        'space-light': 'rgb(var(--color-space-light) / <alpha-value>)',
      },
      backgroundImage: {
        'space-gradient': 'linear-gradient(to bottom, #0a0c23, #141941)',
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'spin-reverse-slow': 'spin 25s linear infinite reverse',
        'blink': 'blink 1s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};