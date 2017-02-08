'use strict';

// Arbitrary rules we use so the code passes.

module.exports = {
    rules: {
        'no-param-reassign':        1,
        'no-proto':                 2,
        'no-redeclare':             2,
        'no-return-assign':         [2, 'except-parens'],
        'no-self-compare':          2,
        'no-unused-expressions':    2,
        'no-useless-call':          2,
        yoda:                       [2, 'never', { exceptRange: true }],
        // Possible Errors
        'comma-dangle':             [2, 'only-multiline'], // turned this off because clean diffs
        'no-cond-assign':           2,
        'no-constant-condition':    2,
        'no-debugger':              2,
        'no-dupe-args':             2,
        'no-dupe-keys':             2,
        'no-duplicate-case':        2,
        'no-empty-character-class': 2,
        'no-empty':                 2,
        'no-ex-assign':             2,
        'no-extra-boolean-cast':    2,
        'no-extra-semi':            2,
        'no-irregular-whitespace':  2,
        'no-obj-calls':             2,
        'no-unreachable':           2
    }
};
