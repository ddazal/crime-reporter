import express, { Request, Response } from 'express'
import morgan from 'morgan'
import { v1Router } from './api/v1'

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use('/api/v1', v1Router)

app.get('/', (req: Request, res: Response) => {
  const baseUrl = `${req.baseUrl}/api/v1`
  res.status(200).json({
    crimes: getRelativeURL(baseUrl, 'crimes'),
    countries: getRelativeURL(baseUrl, 'countries'),
    accused: getRelativeURL(baseUrl, 'accused'),
    subdivisions: getRelativeURL(baseUrl, 'subdivisions'),
    types: getRelativeURL(baseUrl, 'types')
  })
})

function getRelativeURL (baseURL: string, path: string): string {
  return `${baseURL}/${path}`
}

export { app }
