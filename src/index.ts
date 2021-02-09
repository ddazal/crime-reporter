import http from 'http'
import { app } from './app'

const port = process.env.PORT || 3030

const server = http.createServer(app)
server.listen(port)

server.on('listening', () => {
  console.log(`Server listening in http://localhost:${port}`)
})
