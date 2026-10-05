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
      },
      animation: {
        marquee: 'marquee 42s linear infinite',
        floaty: 'floaty 7s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease both',
      },
    },
  },
  plugins: [],
}
