/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3399cc',
        light: "#dee2e6"
        
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

