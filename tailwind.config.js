module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'gradient-flow': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'gradient-flow': 'gradient-flow 8s ease infinite',
      },
    },
  },
  plugins: [],
  plugins: [require('tailwind-scrollbar-hide')],

};


