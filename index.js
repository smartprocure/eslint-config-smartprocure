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
    rules: { }
};
