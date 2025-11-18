/** @type {import("stylelint").Config} */
export default {
  plugins: ['stylelint-scss'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-scss',
    'stylelint-config-recommended-vue',
  ],
  rules: {
    'color-hex-length': null,
    'no-empty-source': null,
  },
  ignoreFiles: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx'],
};
