/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        '50%':'50%'
      },
      colors:{
        'sky':'#0573f0'
      },
      inset:{
        '100px':'100px'
      },
      aspectRatio:{
        '16/9':'16/9'
      }
      
    },
  },
  plugins: [],
}

