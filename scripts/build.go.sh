#!/bin/bash

go get github.com/atombender/go-jsonschema/...

gojsonschema -p main schema.json