'use strict';

module.exports = {
    rules: {
        'no-catch-shadow':            2,
        'no-shadow-restricted-names': 2,
        'no-shadow':                  1,
        'no-undef-init':              2,
        // Required to extend eslint:recommemded
        'no-unused-vars':             1,
        // Required to extend eslint:recommemded because of mocha unit tests
        'no-undef':                   1
    }
};
