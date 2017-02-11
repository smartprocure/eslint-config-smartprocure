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
        'mocha',
        'lodash-fp'
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
        'mocha/no-exclusive-tests':                  'error',
        'mocha/no-skipped-tests':                    'error',
        'mocha/handle-done-callback':                'error',
        'mocha/no-global-tests':                     'error',
        'mocha/no-return-and-callback':              'error',
        'mocha/valid-suite-description':             'error',
        'mocha/no-sibling-hooks':                    'error',
        'mocha/no-identical-title':                  'warn',
        // Because of fn().should.be.true and so on
        'no-unused-expressions':                     0,
        // Lodash
        'lodash-fp/consistent-compose':              'error',
        'lodash-fp/consistent-name':                 [ 'error', '_' ],
        'lodash-fp/no-argumentless-calls':           'error',
        'lodash-fp/no-chain':                        'error',
        'lodash-fp/no-extraneous-args':              'error',
        'lodash-fp/no-extraneous-function-wrapping': 'error',
        'lodash-fp/no-extraneous-iteratee-args':     'error',
        'lodash-fp/no-for-each':                     'error',
        'lodash-fp/no-partial-of-curried':           'error',
        'lodash-fp/no-single-composition':           'error',
        'lodash-fp/no-submodule-destructuring':      'error',
        'lodash-fp/no-unused-result':                'error',
        'lodash-fp/prefer-compact':                  'error',
        'lodash-fp/prefer-composition-grouping':     'error',
        'lodash-fp/prefer-constant': [
            'error', {
                arrowFunctions:                        false
            }
        ],
        'lodash-fp/prefer-flat-map':                 'error',
        'lodash-fp/prefer-get':                      'error',
        'lodash-fp/prefer-identity': [
            'error', {
                arrowFunctions:                        false
            }
        ],
        'lodash-fp/use-fp':                          'error'
    }
};
