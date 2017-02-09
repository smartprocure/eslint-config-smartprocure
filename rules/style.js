'use strict';

// Stylistic rules

module.exports = {
    rules: {
        'block-spacing':               [ 2, 'always' ],
        'brace-style':                 2,
        'comma-spacing':               2,
        'comma-style':                 2,
        indent:                        [ 2, 4, { SwitchCase: 1 } ],
        'linebreak-style':             2,
        'new-parens':                  2,
        'no-array-constructor':        2,
        'no-lonely-if':                2,
        'no-mixed-spaces-and-tabs':    [ 2, 'smart-tabs' ],
        'no-multiple-empty-lines':     [ 2, { max: 2 } ],
        'no-new-object':               2,
        'no-spaced-func':              2,
        'no-trailing-spaces':          [ 2, { skipBlankLines: true } ],
        'no-unneeded-ternary':         2,
        'object-curly-spacing':        [ 2, 'always' ],
        'operator-assignment':         [ 2, 'always' ],
        'padded-blocks':               [ 2, 'never' ],
        'quote-props':                 [ 2, 'as-needed', { keywords: true } ],
        quotes:                        [ 2, 'single', 'avoid-escape' ],
        'semi-spacing':                2,
        semi:                          2,
        'keyword-spacing':             2,
        'space-before-blocks':         2,
        'space-before-function-paren': [ 2, 'never' ],
        'space-infix-ops':             [ 2, { int32Hint: true } ],
        'space-unary-ops':             2,
        'spaced-comment':              [ 2, 'always', { markers: [ '/' ] } ]
    }
};
