/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                backgroundEmerald: "rgba(23, 193, 160, 0.1)",
                textEmerald: "rgba(23, 193, 160)"
            }
        }
    },
    plugins: []
};
