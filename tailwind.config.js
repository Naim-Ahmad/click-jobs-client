/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/Animated-Shape-2.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
        'notFound': "url('/404.svg')",
      },
      colors: {
        violet: {
          500: "#8b5cf6",
          400: "#a78bfa",
        },
  
        slate: {
          500: "#64748b",
          900: "#020617",
        },
      },
    }
  },
  plugins: [],
});
