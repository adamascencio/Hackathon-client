/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx,tsx,ts}"],
    mode: "jit",
    theme: {
      extend: {
        colors: {
          primary: "hsl(0, 0%, 18%)",
          secondary: "#e5e7eb",
          tertiary: "#E6E2DD",
          four: "#F2F2F2",
          dimWhite: "rgba(255, 255, 255, 0.7)",
          dimBlue: "rgba(9, 151, 124, 0.1)",
          blues: '#aeecfc',
          transBlack: "rgba(0, 0, 0, 0.5)",
          lpBg: "rgb(80, 100, 186)",
          btnBorder: "rgb(60, 73, 126)",
          loginBtnDark: "rgb(46, 56, 80)",
          loginBtnLight: "rgb(67, 80, 142)"
        },
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
        },
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
    plugins: [],
  };