#!/bin/sh

npx wait-port postgres:5432

echo "Running Prisma migrations..."
npx prisma migrate dev --name init --skip-seed

echo "Running Prisma seed..."
yarn seed

echo "Starting the application..."
exec yarn start:dev