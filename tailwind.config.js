/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#3F51B5",
        yellow: "#F5E48B",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
