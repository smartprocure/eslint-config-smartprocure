'use strict';

const _ = require('lodash/fp');

describe('Rules', function() {
    it('does not duplicate rules between rules files', function() {
        const files = _.mergeAll(..._.map(name => {
            if (!name) return {};
            const o = {};
            o[name] = require('../rules/' + name);
            return o;
        }, [
            null, 'arbitrary', 'bestPractices', 'style', 'variables'
        ]));

        const rules = _.flatMap(o => _.keys(o.rules), _.values(files));

        const repeated = _.flow(
            _.groupBy(e => e),
            _.filter(e => e.length > 1),
            _.flatten,
            _.uniq
        );

        const repeatedRules = repeated(rules);

        if (repeatedRules.length)
            throw 'Duplicated rules: ' + repeatedRules;
    });
});
