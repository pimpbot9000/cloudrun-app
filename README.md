# Github Actions + Terraform playground

## What it's all about

Really simple React app + Node express backend. Deployed in Google Cloudrun service. Resources in GCP are managed by Terraform.

## Development environment

Use ```docker-compose up``` to run development environment. This run three containers: frontend, backend and postgres. 

## Production

React frontend is built and served by the Express backend so the whole shebang is a single container.

