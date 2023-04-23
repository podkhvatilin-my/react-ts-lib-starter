/* eslint-disable import/no-extraneous-dependencies */
import { resolve } from 'path';

import { configDefaults, defineConfig } from 'vitest/config';

const DEFAULT_COVERAGE_EXCLUDE = configDefaults.coverage.exclude as string[];

export default defineConfig({
  resolve: {
    alias: {
      '@themes': resolve(__dirname, 'lib/themes'),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./setupTests.ts'],
    coverage: {
      exclude: [...DEFAULT_COVERAGE_EXCLUDE, 'lib/**/*.styles.ts'],
    },
  },
});
