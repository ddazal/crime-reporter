import express, { Request, Response } from 'express'
import { crimesRouter } from './routes/crimes'

const app = express()

app.use('/crimes', crimesRouter)

app.get('/', (req: Request, res: Response) => {
  res.end('Hola, mundo.')
})

export { app }