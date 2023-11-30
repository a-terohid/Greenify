/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "PrimaryGreen": "#55B76B",
        "AccentGreen": "#8BD2A0",
        "NeutralGrey": "#333333",
      } ,
      fontFamily: {
        kaoly: [ 'var(--font-Kaoly)' ],
        lato : [ 'var(--font-Lato)' ],
        montserrat : [ '--font-Montserrat' ]
      },
      backgroundImage : {
        'environment-background' : "url('../../public/img/en.png')",
        'side-background' : "url('../../public/img/sidebg.png')",
      }
    },
    container : {
      center : true,
      padding: "2rem"
    },
  },
  plugins: [],
}
