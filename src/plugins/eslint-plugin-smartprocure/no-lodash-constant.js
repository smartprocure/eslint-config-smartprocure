let _ = require('lodash/fp')

module.exports = {
  meta: {
    fixable: 'code',
  },
  create: ctx => ({
    CallExpression(node) {
      if (
        _.isEqual(_.get('callee.object.name', node), '_') &&
        _.isEqual(_.get('callee.property.name', node), 'constant')
      ) {
        let argRaw = ctx
          .getSourceCode()
          .getTokens(_.head(_.get('arguments', node)))
          .map(({ value }) => value)
          .join('')
        if (_.startsWith('{', argRaw) && _.endsWith('}', argRaw)) {
          argRaw = `(${argRaw})`
        }
        ctx.report({
          node,
          message: 'Do not use _.constant',
          fix: fixer => fixer.replaceText(node, `() => ${argRaw}`),
        })
      }
    },
  }),
}
