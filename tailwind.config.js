/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{html,jsx}'],
  theme: {
    extend: {
      fontFamily:{
        Roboto:['Roboto Mono', 'monospace'],
        Poppins:['Poppins', 'sans-serif']
      },
    },
    container:{
      padding:{
        // default:'15px',
      },
      screens:{
        sm:'640px',
        md:'768px',
        lg:'960px',
        xl:'1200px',
      },
    },
  },
  plugins: [],
}