/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        footer: 'rgba(211, 48, 28, 0.1)',
        border: 'rgba(211, 48, 28, 0.5)',
        text: '#D3301C',
      },
    },
  },
  plugins: [],
};
