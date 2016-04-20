// Load PhysFS
var physfs = require('..')
var assert = require('assert')

// Initialize PhysFS
physfs.PHYSFS_init(null)

// Add the search path
physfs.PHYSFS_addToSearchPath(__dirname + '/myzip.zip', 1)

// See if the file exists
var exists = physfs.PHYSFS_exists('myfile.txt')
assert(exists, 'myfile.txt not found.')

// Load the text file
var myfile = physfs.PHYSFS_openRead('myfile.txt')

// See how large it is
var size = physfs.PHYSFS_fileLength(myfile)

// Create a new buffer for the file size
var buffer = new Buffer(size)

// Read the file into the buffer
physfs.PHYSFS_read(myfile, buffer, 1, size)
assert.equal(buffer.toString(), 'Hello World!')

// Close the file
physfs.PHYSFS_close(myfile)

// Unload PhysFS
physfs.PHYSFS_deinit()
