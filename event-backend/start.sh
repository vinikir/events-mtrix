#!/bin/sh

npx wait-port postgres:5432

yarn seed

npm run start:dev