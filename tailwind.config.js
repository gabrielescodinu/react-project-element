/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        template: {
          magenta: '#924859',
          tangerine: '#F99375',
          pink: '#FCDEC6',
          lightRed: '#F86D70',
          violet: '#210D42'
        },
      },
    },
  },
  plugins: [],
}

