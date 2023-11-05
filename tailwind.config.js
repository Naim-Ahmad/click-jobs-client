/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        violet: {
          500: "#8b5cf6",
        },
  
        slate: {
          500: "#64748b",
          900: "#020617",
        },
      },
    }
  },
  plugins: [require("daisyui")],
});
