PROJECTNAME="deeplink.js"
DESC="deeplink.js"

all: clean build

setup:
	npm install .

build:
	@echo
	@echo "info: build start."
	./build.sh

clean:
	@echo
	@echo "info: clean start."
	rm -f deeplink.min.js

.PHONY: all build clean
