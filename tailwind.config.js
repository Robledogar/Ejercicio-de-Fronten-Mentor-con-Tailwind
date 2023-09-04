/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Hanken-Grotesk': ['Hanken Grotesk', 'sans-serif']
      },

      colors: {
        'Lightred': 'hsl(0, 100%, 67%)',
        'Lightred-alpha': 'hsla(0, 100%, 67%, 0.1)',
        'Orangeyyellow': 'hsl(39, 100%, 56%)',
        'Orangeyyellow-alpha': 'hsla(39, 100%, 56%, 0.1)',
        'Greenteal': 'hsl(166, 100%, 37%)',
        'Greenteal-alpha': 'hsla(166, 100%, 37%, 0.1)',
        'Cobaltblue': 'hsl(234, 85%, 45%)',
        'Cobaltblue-alpha': 'hsla(234, 85%, 45%, 0.1)',
        'Lightslateblue-bg': 'hsl(252, 100%, 67%)',
        'Lightslateblue-alpha-bg': 'hsla(252, 100%, 67%, 0.1)',
        'Lightroyalblue-bg': 'hsl(241, 81%, 54%)',
        'Lightroyalblue-alpha-bg': 'hsla(241, 81%, 54%, 0.1)',
        'Violetblue-circle': 'hsla(256, 72%, 46%, 1)',
        'Violetblue-alpha-circle': 'hsla(256, 72%, 46%, 0.1)',
        'Persianblue-circle': 'hsla(241, 72%, 46%, 0)',
        'Persianblue-circle-alpha': 'hsla(241, 72%, 46%, 0.1)',
        'White': 'hsl(0, 0%, 100%)',
        'White-alpha': 'hsla(0, 0%, 100%, 0.1)',
        'Paleblue': 'hsl(221, 100%, 96%)',
        'Paleblue-alpha': 'hsla(221, 100%, 96%, 0.1)',
        'Lightlavender': 'hsl(241, 100%, 89%)',
        'Lightlavender-alpha': 'hsla(241, 100%, 89%, 0.1)',
        'Darkgrayblue': 'hsl(224, 30%, 27%)',
        'Darkgrayblue-alpha': 'hsla(224, 30%, 27%, 0.4)',


      }

    },
  },
  plugins: [],
}




