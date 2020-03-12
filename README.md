# Overview

extendscript-json provides a [standalone JSON library](https://github.com/douglascrockford/JSON-js/blob/master/json2.js) that works with [Adobe ExtendScript](https://www.adobe.com/devnet/scripting.html).

# Installation

Simply install it like any other npm package.

```sh
npm install extendscript-json

```

Add the following to any ExtendScript (`*.jsx`) file where JSON availability is desired.

```js
var Global = Global || {};
Global.rootPath = new File($.fileName).parent;
$.evalFile(Global.rootPath + '/node_modules/extendscript-json/index.jsx');
```

# Usage 

```js
var serialized = JSON.stringify({"a": 1, "test it":[1,'2']});
var parsed = JSON.parse(serialized);
parsed.a; //=> 1
parsed['test it']; //=> [1,"2"]

JSON.stringify('[bad json'); //=> parse error
```

# Testing

`npm test` or `test/run`.

Output should look like:

```
me@host> test/run
2020-03-12T14:17:21|INFO|***************************
2020-03-12T14:17:21|INFO|Jasmine ExtendScript Runner
2020-03-12T14:17:21|INFO|***************************
2020-03-12T14:17:22|WARN|To prevent odd errors, usually methods not being defined, login into Adobe Creative Cloud and verify all modal dialog boxes are closed. If tests are not running as expected, try restarting the application.
2020-03-12T14:17:22|INFO|Loading all specs in /Users/me/projects/extendscript-json/test/spec
2020-03-12T14:17:24|INFO|26 specs, 0 failures
2020-03-12T14:17:24|INFO|Finished in 0.016 seconds
```

# NPM Release Tasks

1. Update `package.json` version number
1. `npm install` to update package lock.
1. Ensure tests pass.
1. Update `CHANGELOG.md` with changes since last release.
1. Check them all into the repository.
1. `git tag -a <version> -m <version>; git push --tags`
1. `npm publish` to deploy the release to npm.

# Thanks

A big thank you to [@douglascrockford](https://github.com/douglascrockford) for making and maintaining this excellent library.
