/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    beforeTouched: {},
    extend: {
      screens: {
        sm: '120px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      },
    },
    plugins: [],
  }
}
