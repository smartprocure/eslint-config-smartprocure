'use strict';

module.exports = {
    'extends': [
        'eslint:recommended'
    ].concat([
        './rules/arbitrary',
        './rules/bestPractices',
        './rules/style',
        './rules/variables'
    ].map(require.resolve)),
    parserOptions: {
        ecmaVersion: 7,
    },
    env: {
        amd:     true,
        browser: true,
        es6:     true,
        node:    true
    },
    rules: { }
};
