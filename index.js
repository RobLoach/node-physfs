//Dependencies
var extend = require('extend-shallow');
var physfs = require('./physfs.js');

// Clean up and structure.
var functions = physfs.functions;
delete physfs.functions;
var constants = physfs.CONSTANTS;
delete physfs.CONSTANTS;

// Use extend-shallow to merge the object.
var out = extend(physfs, constants, functions);

// Remove the PHYSFS_ prefix from each constant/function.
for (var name in out) {
  out[name.replace('PHYSFS_', '')] = out[name];
  delete out[name];
}

module.exports = out;
