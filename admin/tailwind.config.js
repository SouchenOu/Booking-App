/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts.tsx}"
    ],
    theme: {
      extend: {
        colors: {
          'focus-blue': '#022E51',
  
        },
        boxShadow: {
            'custom': '2px 4px 10px 1px rgba(201, 201, 201, 0.47)',
          },
      },
    },
    plugins: [],
  }
  
  