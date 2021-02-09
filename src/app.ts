import express from 'express'
import { v1Router } from './api/v1'

const app = express()

app.use('/api/v1', v1Router)

export { app }
