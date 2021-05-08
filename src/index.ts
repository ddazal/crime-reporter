/* eslint-disable import/first */
require('dotenv').config()

import 'reflect-metadata'
import http from 'http'
import { app } from './app'
import { createConnection } from 'typeorm'

const port = 3030
const server = http.createServer(app)

createConnection().then(connection => {
  console.log(`Connected to database: ${connection.isConnected}`)
  server.listen(port)
}).catch(error => {
  console.log(error.message)
  process.exit(1)
})

server.on('listening', () => {
  console.log(`Server listening in http://localhost:${port}`)
})
