/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm' : '650px', // Set the 'sm' breakpoint to 650px
        'md': '900px',  // Set the 'md' breakpoint to 900px
        'lg': '1300px',  // Set the 'lg' breakpoint to 1300px
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

