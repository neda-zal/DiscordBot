module.exports = {
   root: true,
   parser: '@typescript-eslint/parser',
   plugins: ['@typescript-eslint'],
   extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/eslint-recommended',
   ],
   env: {
      node: true,
   },
   rules: {
      '@typescript-eslint/no-var-requires': 0,
      'no-require-imports': false,
      'no-unused-vars': true,
   },
};
