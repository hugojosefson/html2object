install: npm-install components

npm-install:
	@npm install

build: install index.js
	@component build --dev

components: component.json
	@component install --dev

test: build
	@echo test ...
	@./node_modules/mocha-phantomjs/bin/mocha-phantomjs test/test-runner.html

clean:
	rm -fr build components template.js

.PHONY: clean test build
