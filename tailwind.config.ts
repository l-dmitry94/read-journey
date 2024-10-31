import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./components/**/*.{js,ts,jsx,tsx,mdx,scss}', './app/**/*.{js,ts,jsx,tsx,mdx,scss}'],
    theme: {
        extend: {
            colors: {
                primary: '#f9f9f9',
                secondary: '#686868',
                background: {
                    DEFAULT: '#1f1f1f',
                    dark: '#141414',
                    light: '#262626',
                },
                error: '#e90516',
                success: '#30b94d',
            },
            fontFamily: {
                gilroy: ['Gilroy', 'sans-serif'],
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
            },
            letterSpacing: {
                tight: '-0.02em',
            },
            lineHeight: {
                94: '0.94',
                112: '1.12',
                117: '1.17',
                129: '1.29',
                133: '1.33',
            },
            borderRadius: {
                8: '8px',
                12: '12px',
                15: '15px',
                30: '30px',
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
export default config;
