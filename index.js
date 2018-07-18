/**
 * reverse.js
 * https://github.com/davidkevork/reverse
 *
 * Reverse engineering JavaScript and CSS sources from sourcemaps
 *
 * Copyright (c) Juga Paazmaya <paazmaya@yahoo.com> (https://paazmaya.fi)
 * Copyright (c) David Kevork <david@davidkevork.me> (https://davidkevork.me)
 * Licensed under the MIT license
 */

'use strict';

const path = require('path');
const sourceMap = require('source-map');

/**
 * @param {string} input Contents of the sourcemap file
 * @param {object} options Object {verbose: boolean}
 *
 * @returns {object} Source contents mapped to file names
 */
module.exports = (input, options) => {

  const consumer = new sourceMap.SourceMapConsumer(input);

  const map = {};

  if (consumer.hasContentsOfAllSources()) {
    if (options.verbose) {
      console.log('All sources were included in the sourcemap');
    }

    consumer.sources.forEach((source) => {
      const contents = consumer.sourceContentFor(source);
      map[path.normalize(source).replace(/^(\.\.[/\\])+/, '').replace(/(\?).*$/, '').replace(/[&#,+()$~%'":*?<>{}]/g, '').replace(' ', '.')] = contents;
    });
  }
  else if (options.verbose) {
    console.log('Not all sources were included in the sourcemap');
  }

  return map;
};
