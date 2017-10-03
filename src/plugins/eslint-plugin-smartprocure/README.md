### Intro

Writing ESLint plugins from scratch can be a pain.
There's not a ton of documentation on writing plugins/rules from scratch and they all say to use the Yeoman Generator, which I assume is good, but doesn't make sense since we want to have a local plugin inside of another library.

### Required Reading

While there isn't _too_ much documentation, there is documentation. Here are some articles/docs that were extremely valuable to learning how to write ESLint plugins/rules:

- [ESLint - Working with Rules](https://eslint.org/docs/developer-guide/working-with-rules)
- [ESLint - Working with Plugins](https://eslint.org/docs/developer-guide/working-with-plugins)
- [Creating an ESLint Plugin](https://medium.com/@btegelund/creating-an-eslint-plugin-87f1cb42767f)
- [Writing custom EsLint rules](https://www.kenneth-truyers.net/2016/05/27/writing-custom-eslint-rules/)

### Common Problems with Answers

#### Testing

Testing ESLint rules is _actually_ quite a breeze.
We use Jest in this project and it was quite surprising how easy it was to write tests for rules.

The gist is you write your "valid code" and your "invalid code" as an array of strings (essentially). This generates tests that automatically work with Jest (somehow--don't know how that works)--it makes sure that your valid code doesn't have errors and that the errors specified are the ones that are thrown with your invalid code.
I've been able to even test `--fix`'d code super easily with the `output` property.

Take a peek at the [`no-lodash-constant.spec.js`](no-lodash-constant.spec.js) file to see how it all works.

#### Fix Code with `--fix`

Fixing code is also super easy (and the above section shows how easy it is to TDD) once you get good understanding of ESLint plugins.
