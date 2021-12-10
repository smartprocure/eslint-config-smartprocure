# eslint-config-smartprocure

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the SmartProcure JavaScript style guide


## Installation

```
$ npm install --save-dev eslint eslint-config-smartprocure
```


## Usage

Once the `eslint-config-smartprocure` package is installed, you can use it by specifying `smartprocure` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "smartprocure",
  "rules": {
    // Additional, per-project rules...
  }
}
```

### Using the `smartprocure` config with `eslint:recommended`

There are several rules in the [`eslint:recommended` ruleset](http://eslint.org/docs/rules/) that SmartProcure style is not opinionated about that you might want to enforce in your project.

To use SmartProcure style in conjunction with ESLint's recommended rule set, extend them both, making sure to list `smartprocure` last:

```js
{
  "extends": ["eslint:recommended", "smartprocure"],
  "rules": {
    // Additional, per-project rules...
  }
}
```

To see how the `smartprocure` config compares with `eslint:recommended`, refer to the [source code of `index.js`](https://github.com/smartprocure/eslint-config-smartprocure/blob/master/index.js), which lists every ESLint rule along with whether (and how) it is enforced by the `smartprocure` config.

## License

MIT
