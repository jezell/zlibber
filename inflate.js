#!/usr/bin/env node

var zlib = require("zlib");

var inflate = zlib.createInflate();
process.stdin.pipe(inflate).pipe(process.stdout);
