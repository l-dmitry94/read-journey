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
            fontSize: {
                xs: '0.75rem',
                sm: '0.875rem',
                base: '1rem',
                lg: '1.125rem',
                xl: '1.25rem',
                '2xl': '1.5rem',
                '3xl': '1.875rem',
                '4xl': '2.25rem',
                '5xl': '3rem',
                '6xl': '3.75rem',
                '7xl': '4.5rem',
                '8xl': '6rem',
                '9xl': '8rem',
            },
            lineHeight: {
                tight: '1.29',
            },
            letterSpacing: {
                tight: '-0.02em',
            },
            borderRadius: {
                '4xl': '1.875rem',
            },
            screens: {
                mobile: '375px',
                tablet: '768px',
                desktop: '1440px',
            },
        },
    },
    plugins: [],
};
