# crime-reporter

## Development

- Open the terminal
- `cd` into project root directory and execute

### Method 1: without Docker Compose

Create a copy of the `.env.example` file as `.env` and set the values of the database connection. When using a local database, the `DB_LOCAL` environment variable must be set to `true`.

```sh
$ cp .env.example .env
$ npm run dev
```

### Method 2: with Docker Compose

> Prerequisite: You need to have docker and docker-compose installed on your machine.

As easy as

```sh
docker-compose up -d
```

This will build the images and start the containers.

Regardless of the selected method, visit http://localhost:3030 on a browser

### Production

```sh
npm start
```