import http from 'http'
import { app } from './app'

const port = 3030

const server = http.createServer(app)
server.listen(port)

server.on('listening', () => {
  console.log(`Server listening in http://localhost:${port}`)
})
