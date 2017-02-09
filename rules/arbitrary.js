'use strict';

// Arbitrary rules we use so the code passes.

module.exports = {
    rules: {
        'no-console':            1,
        'no-param-reassign':     1,
        'no-proto':              2,
        'no-return-assign':      [2, 'except-parens'],
        'no-self-compare':       2,
        'no-unused-expressions': 2,
        'no-useless-call':       2,
        yoda:                    [2, 'never', { exceptRange: true }],
        'comma-dangle':          [2, 'only-multiline']
    }
};
