/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: '16px',
        sm: '20px',
        md: '24px',
        lg: '32px',
        xl: '44px',
      },
      screens: {
        xs: '1150px',
      }
    },
  },
  plugins: [],
}

