# Overview

extendscript-json provides a [standalone JSON library](https://github.com/douglascrockford/JSON-js/blob/master/json2.js), thanks [@douglascrockford](https://github.com/douglascrockford), that works with [Adobe ExtendScript](https://www.adobe.com/devnet/scripting.html).

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

# NPM Release Tasks

1. Update `package.json` version number
1. `npm install` to update package lock.
1. Ensure tests pass.
1. Update `CHANGELOG.md` with changes since last release.
1. Check them all into the repository.
1. `git tag -a <version> -m <version>; git push --tags`
1. `npm publish` to deploy the release to npm.
