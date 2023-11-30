#!/bin/bash

zip -r aws-swagger-ui.zip . -x "build.sh" -x "README.md" -x ".git/*" -x ".gitignore" -x "aws-swagger-ui.zip"