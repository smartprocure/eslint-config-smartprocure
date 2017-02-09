'use strict';

module.exports = {
    'extends': [
        'smartprocure:server'
    ],
    plugins: [
        'mocha'
    ],
    rules: {
        // Mocha plugin
        'mocha/no-exclusive-tests':      'error',
        'mocha/no-skipped-tests':        'error',
        'mocha/handle-done-callback':    'error',
        'mocha/no-global-tests':         'error',
        'mocha/no-return-and-callback':  'error',
        'mocha/valid-test-description':  'error',
        'mocha/valid-suite-description': 'error',
        'mocha/no-sibling-hooks':        'error',
        'mocha/no-identical-title':      'warning'
    }
};
