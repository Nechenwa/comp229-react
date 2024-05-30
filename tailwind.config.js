/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure all your script files are covered
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#2B2B52',
        skyBlue: '#6495ED',
      }
    },
  },
  plugins: [],
}

