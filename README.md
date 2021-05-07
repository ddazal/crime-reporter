# crime-reporter

## Development

- Open the terminal
- `cd` into project root directory and execute

Create a copy of the `.env.example` file as `.env` and set the values of the database connection. When using a local database, the `DB_LOCAL` environment variable must be set to `true`. You will need to request for the proper values for the .env file or populate with yours.

```sh
$ cp .env.example .env
$ npm i
$ npm run dev
```

Visit http://localhost:3030 on a browser

### Production

```sh
npm start
```