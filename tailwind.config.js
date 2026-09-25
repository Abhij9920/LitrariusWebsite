/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'green-logo':    '#064e3b',
        'green-em':      '#10B981',
        'coral':         '#F97316',
        'coral-dk':      '#ea6a09',
        'blue-acc':      '#2563EB',
        'charcoal':      '#374151',
        'ink':           '#111827',
        'cream':         '#f5f0eb',
        'muted':         '#6b7280',
        'bdr':           '#E5E7EB',
        'dark-section':  '#064e3b',
        'overlay':       'rgba(6,30,20,0.72)',
      },
      fontFamily: {
        poppins:  ['Poppins', 'sans-serif'],
        inter:    ['Inter', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        rotateFade: {
          '0%,100%': { opacity: '0', transform: 'translateY(12px)' },
          '15%,85%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        marquee:    'marquee 40s linear infinite',
        'fadeUp':   'fadeUp 0.6s ease forwards',
        rotateFade: 'rotateFade 2.5s ease-in-out infinite',
      },
      transitionTimingFunction: {
        'cinematic': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'cinematic-slow': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      maxWidth: { content: '1200px' },
    },
  },
  plugins: [],
};
