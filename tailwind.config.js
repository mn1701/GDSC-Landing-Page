/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'md': '650px',  // Set the 'md' breakpoint to 600px
        'lg': '800px',  // Set the 'lg' breakpoint to 800px
      },
      fontFamily: {
        nunito: ['"Nunito Sans"', 'sans-serif'],
      },
      fontSize: {
        'h1': '68px',
        'h2': '40px',
        'h3': '28px',
        'p1': '20px',
        'p2': '18px',  
        'p3': '14px',
      },
    },
  },
  variants: {},
  plugins: [],
}

