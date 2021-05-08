
# crime-reporter

## Development
> You must have either [Node.js](https://nodejs.org/en/) v12 or [Docker](https://www.docker.com/) installed.
1. Clone the repository
```sh
$ git clone git@github.com:ddazal/crime-reporter.git
```
2.  `cd` into directory and create a copy of the `.env.example` file as `.env` and set the values of your database connection.
```sh
$ cp .env.example .env
```
3. Init the project:
- If you're using Docker you must build the image and then execute the container:

```sh
$ docker image build -t crime-reporter .
$ docker container run -p 3030:3030 -d --name crime-reporter crime-reporter
```
This will run the container in the background. `docker image build` is going to seed the database if there is no data, so it may take a while. You can see the logs by executing the following:
```sh
$ docker container logs -f crime-reporter
```
- If you're not using Docker you must have Node.js and npm installed. This project uses Node.js v12. Verify your installation executing the following:
```sh
$ node -v
v12.x.x
$ npm -v
6.x.x
```
Install dependencies and run the project
```sh
$ npm install
$ npm run dev
```
If you wish to seed the database, then you should execute the `migrate:up` script:
```sh
$ npm run migrate:up
```