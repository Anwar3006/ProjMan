import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                white: "#ffffff",
                gray: {
                    100: "#f3f4f6",
                    200: "#e5e7eb",
                    300: "#d1d5db",
                    500: "#6b7280",
                    700: "#374151",
                    800: "#1f2937",
                },
                blue: {
                    200: "#93c5fd",
                    400: "#60a5fa",
                    500: "#3b82f6",
                },
                "dark-bg": "#101214",
                "dark-secondary": "#1d1f21",
                "dark-tertiary": "#3b3d40",
                "blue-primary": "#0275ff",
                "stroke-dark": "#2d3135",
            },
            screens: {
                "8xl": 1440 / 16 + "rem",
            },
        },
    },

    plugins: [forms],
};
