## Description

Testing assignment with requirements to create a REST API for a simple service
to manage Live Events. With the implementation of the following CRUD operations:
- Get a list of events
- Create a new event
- Get a single event
- Delete an event
- Update an existing event

```
During the development of the API, the following technologies were used:
NestJS, TypeORM, Sqlite, Jest, Swagger, class-validator.

I tried to provide the simulation of authorized access to the API with
validation of the token in the header with the name `X-Authorization-Simulation`
and its value equals `jwt-simulation-token`. So please include this header
in requests to the API.

You can optionally seed the DB with the command `npm run seed` to get some initial data.

UT samples are provided for part of the code.
```

API could be tested with Swagger UI on the following URL: [http://localhost:8050/api#/](http://localhost:8050/api#/).
With tools like Postman or with any other way to perform HTTP requests. Example link [http://localhost:8050/api/events](http://localhost:8050/api/events) 

## Installation

```bash
$ npm install
```

## DB seeding - optional

```bash
$ npm run seed
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

# test coverage
$ npm run test:cov
```
