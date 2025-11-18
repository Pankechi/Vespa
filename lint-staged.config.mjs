export default {
  '*.{js, jsx, ts, tsx}': ['prettier --write', 'eslint --fix'],
  '*.vue': ['stylelint --fix', 'prettier --write', 'eslint --fix'],
  '*.scss': ['stylelint --fix', 'prettier --write'],
};
