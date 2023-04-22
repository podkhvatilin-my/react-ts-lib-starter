import { resolve } from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig(() => ({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true
        })
    ],
    build: {
        sourcemap: true,
        lib: {
            name: 'ReactTSLibStarter',
            formats: ['es', 'umd'],
            entry: resolve(__dirname, 'lib/index.ts'),
            fileName: (format) => `react-ts-lib-starter.${format}.js`
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                }
            }
        }
    }
}));
