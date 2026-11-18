/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
        montserrat: ['Montserrat', 'system-ui', 'sans-serif'],
        quicksand: ['Quicksand', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        'display-sm': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      },
      colors: {
        primary: {
          50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd',
          400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8',
          800: '#1e40af', 900: '#1e3a5f', 950: '#0f172a',
        },
        accent: { DEFAULT: '#2563EB', light: '#DBEAFE', dark: '#1D4ED8' },
      },
      boxShadow: {
        'soft': '0 4px 24px -2px rgba(0,0,0,0.06)',
        'card': '0 8px 30px -4px rgba(0,0,0,0.08)',
        'card-hover': '0 20px 40px -8px rgba(37,99,235,0.15), 0 8px 16px -4px rgba(0,0,0,0.04)',
        'glow-blue': '0 0 30px -5px rgba(59,130,246,0.3)',
        'glow-indigo': '0 0 30px -5px rgba(99,102,241,0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'slide-left': 'slideInLeft 0.7s ease-out forwards',
        'slide-right': 'slideInRight 0.7s ease-out forwards',
        'float': 'float 4s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        fadeInUp: { '0%': { opacity: 0, transform: 'translateY(24px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        slideInLeft: { '0%': { opacity: 0, transform: 'translateX(-32px)' }, '100%': { opacity: 1, transform: 'translateX(0)' } },
        slideInRight: { '0%': { opacity: 0, transform: 'translateX(32px)' }, '100%': { opacity: 1, transform: 'translateX(0)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
        pulseSoft: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.7 } },
      },
      backdropBlur: { xs: '2px' },
    },
  },
  plugins: [],
}
