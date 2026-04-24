/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Specifically scan index.html in the root
    "./pages/**/*.html", // Scan any HTML files in a "pages" folder
    "./js/**/*.js", // Scan any JavaScript files where you might toggle classes
    "./src/**/*.{html,js}", // If you have a src folder, scan that too
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1020px",
      xl: "1440px",
    },
    extend: {
      colors: {
        softBlue: "hsl(231, 69%, 60%)",
        softRed: "hsl(0, 94%, 66%)",
        grayishBlue: "hsl(229, 8%, 60%)",
        veryDarkBlue: "hsl(229, 31%, 21%)",
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      backgroundImage: () => ({
        dots: "url('../images/bg-dots.svg')",
      }),
    },
  },
  plugins: [],
};
