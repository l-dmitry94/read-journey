/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#f9f9f9',
                secondary: {
                    DEFAULT: '#262626',
                    dark: '#1f1f1f',
                },
                gray: '#686868',
                black: '#141414',
                success: '#30b94d',
                error: '#e90516',
                blue: '#4f92f7',
            },
            fontFamily: {
                gilroy: '"Gilroy", sans-serif',
            },
            lineHeight: {
                tight: '1.29',
            },
            letterSpacing: {
                tight: '-0.02em',
            },
        },
    },
    plugins: [],
};
