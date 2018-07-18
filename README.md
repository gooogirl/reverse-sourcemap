# Reverse.js

> Reverse engineering JavaScript and CSS sources from sourcemaps


## Getting started

Install the `reverse.js` command line utility globally with [npm](https://www.npmjs.com/).
Elevated privileges might be needed via `sudo`, depending on the platform. In most cases just:

```sh
npm install --global reverse
```

Please note that the minimum supported version of [Node.js](https://nodejs.org/en/) is `8.11.1`, which is [the active Long Term Support (LTS) version](https://github.com/nodejs/Release#release-schedule).

## Command line options

The output of `reverse --help` pretty much covers all the options:

```sh
reverse - Reverse engineering JavaScript and CSS sources from sourcemaps
Usage: reverse [options] <file|directory>

  -h, --help               Help and usage instructions
  -V, --version            Version number
  -v, --verbose            Verbose output, will print which file is currently being processed
  -o, --output-dir String  Output directory - default: .
  -M, --match String       Regular expression for matching and filtering files - default: \.map$
  -r, --recursive          Recursively search matching files

Version 0.4.0
```

## Testing

Test files are generated with [UglifyJS2](https://github.com/mishoo/UglifyJS2) and
[`sass`](http://sass-lang.com)
by using files from the [stretchy](https://github.com/LeaVerou/stretchy) project,
with the following commands:

```sh
uglifyjs stretchy.js --compress --mangle \
 -o stretchy.min.js --source-map stretchy.min.js.map

uglifyjs stretchy.js --compress --mangle \
 -o stretchy.min.js --source-map stretchy-with-sources.min.js.map \
 --source-map-include-sources

sass stretchy.scss:stretchy.css

sass stretchy.scss:stretchy.css --sourcemap=inline
```

Unit tests are written with [`tape`](https://github.com/substack/tape) and can be executed with `npm test`.
Code coverage is inspected with [`nyc`](https://github.com/istanbuljs/nyc) and
can be executed with `npm run coverage` after running `npm test`.
Please make sure it is over 90% at all times.

## Contributing

["A Beginner's Guide to Open Source: The Best Advice for Making your First Contribution"](http://www.erikaheidi.com/blog/a-beginners-guide-to-open-source-the-best-advice-for-making-your-first-contribution/).

[Also there is a blog post about "45 Github Issues Dos and Don’ts"](https://davidwalsh.name/45-github-issues-dos-donts).

Linting is done with [ESLint](http://eslint.org) and can be executed with `npm run lint`.
There should be no errors appearing after any JavaScript file changes.

Please note that any features or changed will not be merged without working unit tests.

## License

Copyright (c) [Juga Paazmaya](https://paazmaya.fi) <paazmaya@yahoo.com>
Copyright (c) [David Kevork](https://davidkevork.me) <david@davidkevork.me>

Licensed under [the MIT license](./LICENSE).
