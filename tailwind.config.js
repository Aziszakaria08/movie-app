/* eslint-disable no-undef */
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        flowbite.content(),
    ],
    theme: {
        extend: {
            fontFamily: {
                serif: "Newsreader",
                "sans-serif": "Inter",
            },
            backgroundImage: {
                "home-page": "url('/src/assets/bg1.jpg')",
                hero: "url('/src/assets/bg-hero.jpg')",
            },
        },
    },
    plugins: [flowbite.plugin()],
};
