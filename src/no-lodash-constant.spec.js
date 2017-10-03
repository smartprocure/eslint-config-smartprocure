/* eslint-env jest */

let { RuleTester } = require('eslint')
let rule = require('./no-lodash-constant')

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
  },
})

let ruleTester = new RuleTester()

let VALID_CODE = [`let thing = () => { return ''; }`]

ruleTester.run('no-lodash-constant', rule, {
  valid: VALID_CODE.map(code => ({ code })),
  invalid: [
    {
      code: "var bob = _.constant('')",
      errors: [
        {
          message: 'Do not use _.constant',
        },
      ],
    },
    {
      code: "let bob = _.constant('')",
      errors: [
        {
          message: 'Do not use _.constant',
        },
      ],
    },
  ],
})
