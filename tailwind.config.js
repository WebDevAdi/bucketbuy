/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        '100px':'100px',
        '200px':'200px',
        '350px':'350px',
        '400px':'400px',
        '500px':'500px',
        '700px':"700px",
        '800px':'800px',
        '900px':'900px',
        '1100px':"1100px",
        '1200px':'1200px',
        '1300px':'1300px',
        '1500px':'1500px',
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

