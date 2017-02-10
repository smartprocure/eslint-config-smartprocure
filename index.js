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
    plugins: [
        'mocha'
    ],
    parserOptions: {
        ecmaVersion: 7,
    },
    env: {
        amd:     true,
        browser: true,
        es6:     true,
        node:    true,
        mocha:   true
    },
    rules: {
        // Mocha plugin
        'mocha/no-exclusive-tests':      'error',
        'mocha/no-skipped-tests':        'error',
        'mocha/handle-done-callback':    'error',
        'mocha/no-global-tests':         'error',
        'mocha/no-return-and-callback':  'error',
        'mocha/valid-suite-description': 'error',
        'mocha/no-sibling-hooks':        'error',
        'mocha/no-identical-title':      'warn',
        // Because of fn().should.be.true and so on
        'no-unused-expressions': 0
    }
};
