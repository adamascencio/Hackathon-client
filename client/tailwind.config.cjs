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
                blues: "#aeecfc",
                transBlack: "rgba(0, 0, 0, 0.5)",
                lpBg: "rgb(80, 100, 186)",
                btnBorder: "rgb(60, 73, 126)",
                loginBtnDark: "rgb(46, 56, 80)",
                loginBtnLight: "rgb(67, 80, 142)",
                completeTop: "#0D6FCA",
                completeBottom: "#4B0384",
                galacticPurple: "#7C25EA",
                orbitOrange: "#FF9B05",
                martianMauve: "#DB7373",
                beyondBlue: "#0D6FCA",
                lunarWhite: "#FEF5EC",
                valvetNight: "#1E1E1E",
                asteroidGray: "#D9D9D9",
            },
            fontFamily: {
                nunito: ["Nunito", "sans-serif"],
            },
            translate: {
                xInput: "translate(12px) scale(1)",
                yInput: "translate(16px) scale(1)",
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
        fontWeight: {
            thin: "300",
            boldish: "400",
            bold: "600",
            bolder: "700",
            boldest: "1000",
        },
        translate: {
            xInput: "translate(12px) scale(1)",
            yInput: "translate(16px) scale(1)",
        },
    },
    plugins: [],
};
