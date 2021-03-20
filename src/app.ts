import express, { Request, Response } from 'express'
import { v1Router } from './api/v1'

const app = express()

app.use('/api/v1', v1Router)

app.get('/', (req: Request, res: Response) => {
  const baseUrl = `${req.baseUrl}/api/v1`
  res.status(200).json({
    crimes: `${baseUrl}/crimes`,
    countries: `${baseUrl}/countries`
  })
})

export { app }
