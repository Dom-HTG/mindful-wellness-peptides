/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0C0E',
        surface: '#141619',
        'surface-2': '#1B1E22',
        bone: '#F4F1EA',
        muted: '#9AA0A8',
        gold: '#E8B25C',
        'gold-soft': '#F0C888',
        sage: '#6E8F7A',
        line: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        display: ['Outfit', 'system-ui', 'sans-serif'],
        sans: ['Geist', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '90rem',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate3d(-4%, -3%, 0) scale(1)' },
          '50%': { transform: 'translate3d(5%, 4%, 0) scale(1.12)' },
        },
        sheen: {
          '0%': { transform: 'translateX(-130%) skewX(-12deg)' },
          '100%': { transform: 'translateX(240%) skewX(-12deg)' },
        },
        'sweep-x': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.85' },
        },
      },
      animation: {
        marquee: 'marquee 42s linear infinite',
        floaty: 'floaty 7s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        aurora: 'aurora 20s ease-in-out infinite',
        sheen: 'sheen 1.1s cubic-bezier(0.16, 1, 0.3, 1)',
        'sweep-x': 'sweep-x 3.4s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
