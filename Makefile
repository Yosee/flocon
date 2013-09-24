MOCHA_OPTS= --check-leaks --reporter spec

all: clean build

test: clean build
	NODE_ENV=test ./node_modules/.bin/mocha $(MOCHA_OPTS) test/index.js

build: clean
	node-gyp configure build

clean:
	node-gyp clean

.PHONY: all
