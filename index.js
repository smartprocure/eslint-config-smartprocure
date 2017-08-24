let eslintBuiltinRules = {
  eqeqeq: ['warn', 'always'],
  'arrow-body-style': ['error', 'as-needed'],
  'prefer-spread': 'warn',
  'prefer-rest-params': 'warn',
  'prefer-template': 'error',
  'no-duplicate-imports': 'error',
  'wrap-iife': 'error',
  'no-console': 'warn',
  'no-unneeded-ternary': 'error',
  'require-await': 'error',
  'one-var': ['error', 'never'],
  'no-empty-function': 'error',
  'no-implicit-coercion': ['error', { allow: ['!!', '~'] }],
  'no-return-assign': 'error',
  'no-return-await': 'error',
}

let reactRules = {
  'react/prefer-stateless-function': 'error',
  'react/jsx-uses-vars': 'error',
  'react/jsx-uses-react': 'error',
  'react/react-in-jsx-scope': 'error',
  'react/self-closing-comp': 'error',
  'react/void-dom-elements-no-children': 'error',
}

let lodashFpRules = {
  'lodash-fp/use-fp': 'error',
  'lodash-fp/no-for-each': 'error',
  'lodash-fp/no-argumentless-calls': 'error',
  'lodash-fp/no-unused-result': 'error',
  'lodash-fp/prefer-flat-map': 'error',
  'lodash-fp/no-extraneous-iteratee-args': 'error',
  'lodash-fp/no-single-composition': 'error',
}

let lodashRules = {
  'lodash/prop-shorthand': ['error', 'always'],
  'lodash/prefer-reject': 'error',
}

let importRules = {
  'import/no-unresolved': ['error', { commonjs: true }],
}

let mochaRules = {
  'mocha/no-exclusive-tests': 'error',
  'mocha/no-pending-tests': 'error',
  'mocha/no-skipped-tests': 'error',
}

let jestRules = {
  'jest/no-disabled-tests': 'error',
  'jest/no-focused-tests': 'error',
  'jest/no-identical-title': 'error',
  'jest/valid-expect': 'error',
}

module.exports = {
  extends: ['eslint:recommended'],
  plugins: ['react', 'lodash', 'lodash-fp', 'import', 'mocha', 'jest'],
  parserOptions: {
    ecmaVersion: 7,
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: Object.assign(
    {},
    eslintBuiltinRules,
    reactRules,
    lodashFpRules,
    lodashRules,
    importRules,
    mochaRules,
    jestRules
  ),
}
