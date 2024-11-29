import type { Config } from 'tailwindcss';

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,scss}'],
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
                accent: '#4f92f7',
            },
            letterSpacing: {
                tight: '-0.02em',
            },
            fontFamily: {
                gilroy: ['var(--font-family)'],
            },
            borderRadius: {
                30: '30px',
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

            screens: {
                mobile: '375px',
                tablet: '768px',
                desktop: '1280px',
            },
        },
    },
} satisfies Config;
