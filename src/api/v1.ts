import { Router } from 'express'
import { crimesRouter } from './routes/crime'

const v1Router = Router()

v1Router.use('/crimes', crimesRouter)

export { v1Router }
