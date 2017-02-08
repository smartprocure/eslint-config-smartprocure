'use strict';

module.exports = {
    'extends': [
        './rules/arbitrary',
        './rules/bestPractices',
        './rules/style',
        './rules/variables'
    ].map(require.resolve),
    rules: { }
};
