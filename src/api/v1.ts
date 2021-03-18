import { Router } from 'express'
import { crimesRouter } from './routes/crime'
import { countriesRouter } from './routes/countries'

const v1Router = Router()

v1Router.use('/crimes', crimesRouter)
v1Router.use('/countries', countriesRouter)

export { v1Router }
