let _ = require('lodash/fp')

let eslintBuiltinRules = {
  eqeqeq: ['warn', 'always'],
  'arrow-body-style': ['error', 'as-needed'],
  'prefer-spread': 'error',
  'prefer-rest-params': 'warn',
  'prefer-template': 'error',
  'no-duplicate-imports': 'error',
  'wrap-iife': 'error',
  'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
  'no-unneeded-ternary': 'error',
  'one-var': ['error', 'never'],
  'no-empty': 'off',
  'no-implicit-coercion': ['error', { allow: ['!!', '~'] }],
  'no-return-assign': 'error',
  'no-return-await': 'error',
  'object-shorthand': ['error', 'always', { avoidExplicitReturnArrows: true }],
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
  'lodash-fp/no-chain': 'warn',
  'lodash-fp/no-extraneous-args': 'error',
  'lodash-fp/no-extraneous-function-wrapping': 'warn',
  'lodash-fp/no-submodule-destructuring': 'error',
  'lodash-fp/prefer-composition-grouping': 'error',
  'lodash-fp/prefer-constant': ['warn', { arrowFunctions: false }],
  'lodash-fp/prefer-get': 'warn',
}

let lodashRules = {
  'lodash/prop-shorthand': ['error', 'always'],
  'lodash/prefer-reject': 'error',
  'lodash/prefer-lodash-method': 1,
}

let importRules = {
  'import/no-unresolved': ['error', { commonjs: true }],
}

let mochaRules = {
  'mocha/no-exclusive-tests': 'error',
  'mocha/no-pending-tests': 'error',
  'mocha/no-skipped-tests': 'error',
  'mocha/handle-done-callback': 'error',
  'mocha/no-global-tests': 'error',
  'mocha/no-return-and-callback': 'error',
  'mocha/valid-suite-description': 'error',
  'mocha/no-sibling-hooks': 'error',
  'mocha/no-identical-title': 'error',
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
  globals: {
    sails: true
  },
  rules: _.extend(
    eslintBuiltinRules,
    reactRules,
    lodashFpRules,
    lodashRules,
    importRules,
    mochaRules,
    jestRules
  ),
}
