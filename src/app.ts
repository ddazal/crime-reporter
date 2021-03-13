import express, { Request, Response } from 'express'
import { v1Router } from './api/v1'

const app = express()

app.use('/api/v1', v1Router)

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    crimes: `${req.baseUrl}/api/v1/crimes`
  })
})

export { app }
