/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        yellow: {
          50: '#fffdf0',
          100: '#fff9d0',
          200: '#fff5a1',
          300: '#ffee73',
          400: '#ffe344',
          500: '#ffcb05', // YellowPages primary yellow
          600: '#e6b800', // Darker shade
          700: '#cc9900',
          800: '#a37a00',
          900: '#7a5b00',
        },
      },
    },
  },
  plugins: [],
}