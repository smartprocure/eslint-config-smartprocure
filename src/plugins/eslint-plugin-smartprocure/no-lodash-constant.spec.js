/* eslint-env jest */

let { RuleTester } = require('eslint')
let rule = require('./no-lodash-constant')

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
  },
})

let ruleTester = new RuleTester()

let VALID_CODE = [
  `let thing = () => { return ''; }`,
  `let thing = () => ''`,
  `let thing = function() { return ''; }`,
  `function thing() { return ''; }`,
]
let INVALID_CODE = [
  `var bob = _.constant('')`,
  `let bob = _.constant(1)`,
  `const bob = _.constant(true)`,
  `let bob = _.constant({})`,
]

ruleTester.run('no-lodash-constant', rule, {
  valid: VALID_CODE.map(code => ({ code })),
  invalid: INVALID_CODE.map(code => ({
    code,
    errors: [
      {
        message: 'Do not use _.constant',
      },
    ],
  })),
})
