module.exports = {
  create: ctx => ({
    VariableDeclaration(node) {
      console.info(node.declarations[0].id.name)
      ctx.report({
        node,
        message: 'Yooo!!!',
      })
    },
  }),
}
