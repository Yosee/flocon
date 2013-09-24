all:	clean build

test: clean build
	npm test

build: clean
	node-gyp configure build

clean:
	node-gyp clean

.PHONY: all
