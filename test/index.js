// Load PhysFS
var physfs = require('..')
var assert = require('assert')

// Initialize PhysFS
physfs.init(null)

// Add the search path
physfs.addToSearchPath(__dirname + '/myzip.zip', 1)

// See if the file exists
var exists = physfs.exists('myfile.txt')
assert(exists, 'myfile.txt not found.')

// Load the text file
var myfile = physfs.openRead('myfile.txt')

// See how large it is
var size = physfs.fileLength(myfile)

// Create a new buffer for the file size
var buffer = new Buffer(size)

// Read the file into the buffer
physfs.read(myfile, buffer, 1, size)
assert.equal(buffer.toString(), 'Hello World!')

// Close the file
physfs.close(myfile)

// Unload PhysFS
physfs.deinit()
