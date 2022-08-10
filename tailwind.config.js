/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
       colors: {
                primary: "#00288D",
                text_primary: "#001549",
            },
            fonts: {
                montserat: 'Montserrat',
                opensans: 'Open Sans',
            }
    },
  },
  plugins: [],
}
