/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "young-serif": ["Young Serif", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        "prim-nutmeg": "hsl(14, 45%, 36%)",
        "prim-raspberry": "hsl(332, 51%, 32%)",
        "neut-white": "hsl(0, 0%, 100%)",
        "neut-rose-white": " hsl(330, 100%, 98%)",
        "neut-eggshell": "hsl(30, 54%, 90%)",
        "neut-light-grey": "hsl(30, 18%, 87%)",
        "neut-wenge-brown": "hsl(30, 10%, 34%)",
        "neut-dark-charcoal": "hsl(24, 5%, 18%)",
      },
    },
  },
  plugins: [],
};
