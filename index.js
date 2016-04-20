var extend = require('extend-shallow');
var physfs = require('./physfs.js');

// Clean up and structure.
var functions = physfs.functions;
delete physfs.functions;

// Use extend-shallow to merge the object.
module.exports = extend(physfs, functions);
