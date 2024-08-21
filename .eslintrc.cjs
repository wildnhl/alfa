module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['standard-with-typescript', 'plugin:react/recommended'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/semi': ['error', 'always'],
    'space-before-function-paren': 0,
    '@typescript-eslint/space-before-function-paren': 0,
    '@typescript-eslint/non-nullable-type-assertion-style': 0,
    '@typescript-eslint/triple-slash-reference': 0,
    '@typescript-eslint/explicit-function-return-type': 'off'
  }
};
