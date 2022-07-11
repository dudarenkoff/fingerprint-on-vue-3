/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier'
  ],
  rules: {
    'prettier/prettier': 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-prototype-builtins': 'off',
    'prefer-arrow-callback': 'error',
    quotes: [1, 'single', { avoidEscape: true }],
    '@typescript-eslint/no-unused-vars': ['warn'],
    'no-useless-escape': 'warn',
    'no-var': 'error',
    'prefer-const': 'warn',
    'no-redeclare': 'warn'
  }
}
