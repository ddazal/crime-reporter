import { Router } from 'express'
import { crimesRouter } from '../modules/crimes/routes'

const v1Router = Router()

v1Router.use('/crimes', crimesRouter)

export { v1Router }
