import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          50: '#faf8f4', 100: '#f4f0e8', 200: '#ece6d9', 300: '#e0d9c8', 400: '#ccc3ae',
          500: '#aea490', 600: '#857b6a', 700: '#5a5144', 800: '#322d25', 900: '#1a1612', 950: '#0f0c08'
        },
        ink: { DEFAULT: '#0f0c08', warm: '#2c2319', muted: '#6b5f50', faint: '#a89e90' },
        gold: { DEFAULT: '#7a5c38', light: '#a8834f', pale: '#d4b896' }
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'serif'],
        sans: ['var(--font-manrope)', 'sans-serif']
      },
      keyframes: {
        'grain-shift': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '20%': { transform: 'translate(-2%, 1%)' },
          '40%': { transform: 'translate(2%, -1%)' },
          '60%': { transform: 'translate(-1%, -2%)' },
          '80%': { transform: 'translate(1%, 2%)' }
        }
      },
      animation: { 'grain-shift': 'grain-shift 0.7s steps(1) infinite' }
    }
  },
  plugins: []
};
export default config;
