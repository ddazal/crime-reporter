require('dotenv').config()

const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } = process.env

module.exports = {
  type: 'mongodb',
  url: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
  // eslint-disable-next-line node/no-path-concat
  migrations: [__dirname + '/migrations/*.ts'],
  useUnifiedTopology: true,
  useNewUrlParser: true,
  ssl: true,
  cli: {
    migrationsDir: 'migrations'
  },
  entities: [
    'src/core/**/domain/**.ts'
  ]
}
