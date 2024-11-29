import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler',
                silenceDeprecations: ['import'],
            },
        },
    },
    resolve: {
        alias: {
            src: '/src',
            components: '/src/components',
            pages: '/src/pages',
            assets: '/src/assets',
            services: '/src/services',
            helpers: '/src/helpers',
            styles: '/src/styles',
            hooks: '/src/hooks',
            configs: '/src/configs',
            store: '/src/store',
            types: '/src/types',
        },
    },
});
