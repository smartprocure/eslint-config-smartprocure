# eslint-config-smartprocure [![CircleCI](https://img.shields.io/circleci/project/github/smartprocure/eslint-config-smartprocure.svg)]()

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

## License

MIT
