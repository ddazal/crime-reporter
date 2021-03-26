import { Router } from 'express'
import { accusedRouter } from './routes/accused'
import { countriesRouter } from './routes/countries'
import { crimesRouter } from './routes/crime'
import { subdivisionRouter } from './routes/subdivisions'

const v1Router = Router()

v1Router.use('/crimes', crimesRouter)
v1Router.use('/countries', countriesRouter)
v1Router.use('/accused', accusedRouter)
v1Router.use('/subdivisions', subdivisionRouter)

export { v1Router }
