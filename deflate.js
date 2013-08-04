#!/usr/bin/env node

var zlib = require("zlib");

var deflate = zlib.createDeflate();
process.stdin.pipe(deflate).pipe(process.stdout);
