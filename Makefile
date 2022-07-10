.DEFAULT_GOAL := check

all-test: unit-test e2e-test

unit-test:
	@echo 'Unit test here!'

e2e-test:
	npm run e2e:run

init:
	@npm ci

build: all-test

start:
	@npm run start

check: --pre-check all-test
	@echo "✅"

--pre-check:
	@npm run lint
