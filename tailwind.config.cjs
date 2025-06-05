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
        footer: 'rgba(123,74,226, 0.1)',
        border: 'rgba(123,74,226, 0.5)',
        text: '#7B4AE2',
      },
    },
  },
};
