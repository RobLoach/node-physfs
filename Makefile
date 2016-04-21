PHYSFS_VERSION=2.0.3

lib: deps/physfs node_modules
	ffi-generate -x -f deps/physfs/physfs.h -l libphysfs -m functions > physfs.js

node_modules:
	npm i

deps:
	mkdir -p deps

deps/physfs: deps
	git clone --branch=release-$(PHYSFS_VERSION) git@github.com:criptych/physfs.git deps/physfs

clean:
	rm -rf deps lib
