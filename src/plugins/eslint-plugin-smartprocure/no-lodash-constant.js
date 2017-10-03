let _ = require('lodash/fp')

module.exports = {
  create: ctx => ({
    MemberExpression(node) {
      if (
        _.isEqual(_.get('object.name', node), '_') &&
        _.isEqual(_.get('property.name', node), 'constant')
      ) {
        ctx.report({
          node,
          message: 'Do not use _.constant',
        })
      }
    },
  }),
}
