'use strict';

var arbitrary     = require('../rules/arbitrary'),
    bestPractices = require('../rules/bestPractices'),
    style         = require('../rules/style'),
    variables     = require('../rules/variables');

describe('Rules', function() {
    it('does not duplicate rules between rules files', function() {
        var files = {
            'arbitrary.js':     arbitrary,
            'bestPractices.js': bestPractices,
            'style.js':         style,
            'variables.js':     variables
        };

        var allRules = {};

        Object.keys(files).forEach(function(file) {
            Object.keys(files[file].rules).forEach(function(ruleName) {
                if (ruleName in allRules)
                    throw new Error('Found ' + ruleName + ' in ' + file + ', but ' + ruleName + ' already exists in ' + allRules[ruleName]);

                allRules[ruleName] = file;
            });
        });
    });
});
