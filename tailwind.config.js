/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        customOrange: '#FD6F00',
        customBG:' #F8F8F8',
        customBR : '#545454',
        customBlack : '#1E1E1E',
        customBG1: '#121212',
        input : ' #AFAFAF'

      },
    },
  },
  plugins: [],
};
