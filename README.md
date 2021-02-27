# crime-reporter

## Scripts

- Develop

```sh
npm run dev
```

- Build

```sh
npm run build
```

- Serve

```sh
npm start
```

## Run with docker compose

> Prerequisite: You need to have docker and docker compose first to proceed with this variant.

- Open the terminal.
- Go to the project root directory.
- Run `docker-compose up`. This will build the images if not found (the first time) and make the containers run.
- If you want to disable logs you can add `-d` flag at the end of the command.
- Open the browser at http://localhost:3030