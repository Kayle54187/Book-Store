<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

Books Shop backend built using Express, Nest.js, PostgreSQL, Prisma
With JWT Authentication

## Installation

```bash
$ npm install
```

## Setting Up Project

create a .env.development for Dev Environment credentials
add the following

```env
DATABASE_URL=postgresql://$psql_user:$password$psql_host:5432/$psql_db_name
JWT_SECRET=your_jwt_secret

```

Setting up Prisma

```bash
$ npm run prisma:generate
```

Running Table Migrations

```bash
# developemnt
$ npm run migrate:dev

# deployment
$ npm run migrate:deploy
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
