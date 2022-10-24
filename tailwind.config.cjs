/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      colors: {
        footer: 'rgba(211, 48, 28, 0.1)',
        border: 'rgba(211, 48, 28, 0.5)',
        text: '#D3301C',
      },
    },
  },
};
