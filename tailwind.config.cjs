/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.svelte"],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#39D37B",
                },
                dark: {
                    DEFAULT: "#2D2E2D",
                },
                light: {
                    DEFAULT: "#FFFFFF",
                },
            },
            fontFamily: {
                "roboto-flex": ['"Roboto Flex"', "sans-serif"],
            },
        },
    },
    plugins: [],
};
