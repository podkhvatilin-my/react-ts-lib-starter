/* eslint-disable import/no-extraneous-dependencies */
import { configDefaults, defineConfig } from 'vitest/config';

const DEFAULT_COVERAGE_EXCLUDE = configDefaults.coverage.exclude as string[];

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./setupTests.ts'],
    coverage: {
      exclude: [...DEFAULT_COVERAGE_EXCLUDE, 'lib/**/*.styles.ts'],
    },
  },
});
