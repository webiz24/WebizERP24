import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/admin.scss',
                'resources/js/admin.js',
            ],
            refresh: true,
        }),
    ],
});
