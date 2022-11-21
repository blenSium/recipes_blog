/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}", 'node_modules/flowbite-react/**/*.{js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
