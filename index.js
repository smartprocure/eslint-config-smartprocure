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
        'mocha/no-exclusive-tests':                  2,
        'mocha/no-skipped-tests':                    2,
        'mocha/handle-done-callback':                2,
        'mocha/no-global-tests':                     2,
        'mocha/no-return-and-callback':              2,
        'mocha/valid-suite-description':             2,
        'mocha/no-sibling-hooks':                    2,
        'mocha/no-identical-title':                  1,
        // Because of fn().should.be.true and so on
        'no-unused-expressions':                     0,
        // Lodash
        'lodash-fp/consistent-compose':              2,
        'lodash-fp/consistent-name':                 [ 2, '_' ],
        'lodash-fp/no-argumentless-calls':           2,
        'lodash-fp/no-chain':                        1,
        'lodash-fp/no-extraneous-args':              2,
        'lodash-fp/no-extraneous-function-wrapping': 1,
        'lodash-fp/no-extraneous-iteratee-args':     2,
        'lodash-fp/no-for-each':                     1,
        'lodash-fp/no-partial-of-curried':           2,
        'lodash-fp/no-single-composition':           2,
        'lodash-fp/no-submodule-destructuring':      2,
        'lodash-fp/no-unused-result':                2,
        'lodash-fp/prefer-compact':                  2,
        'lodash-fp/prefer-composition-grouping':     2,
        'lodash-fp/prefer-constant': [
            1, {
                arrowFunctions:                      false
            }
        ],
        'lodash-fp/prefer-flat-map':                 2,
        'lodash-fp/prefer-get':                      1,
        'lodash-fp/prefer-identity': [
            1, {
                arrowFunctions:                      false
            }
        ],
        // 'lodash-fp/preferred-alias':                 2,
        'lodash-fp/use-fp':                          1
    }
};
