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

const tape = require('tape');
const shuji = require('../index');

tape('function is exported', (test) => {
  test.plan(1);

  test.equal(typeof shuji, 'function');
});

