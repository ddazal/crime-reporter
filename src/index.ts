/* eslint-disable import/first */
require('dotenv').config()

import http from 'http'
import { app } from './app'

const port = process.env.PORT

const server = http.createServer(app)
server.listen(port)

server.on('listening', () => {
  console.log(`Server listening in http://localhost:${port}`)
})
