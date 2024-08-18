/* eslint-disable no-undef */
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins", "sans-serif"],
            },
            backgroundImage: {
                "home-page": "url('/src/assets/bg1.jpg')",
                hero: "url('/src/assets/bg-hero.jpg')",
            },
            colors: {
                main: "rgb(8, 10, 26)",
                subMain: "#c5230e",
                star: "#FFAF00",
            },
        },
    },
    plugins: [flowbite.plugin()],
};
