/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",  
          sm: "1.5rem",     
          md: "2rem",      
          lg: "3rem",       
          xl: "4rem",       
          "2xl": "5rem",    
        },
      },
    },
  },
  plugins: [],
}
