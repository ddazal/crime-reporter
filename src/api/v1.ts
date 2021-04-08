import { Router } from 'express'
import { accusedRouter } from './routes/accused'
import { countriesRouter } from './routes/countries'
import { crimesRouter } from './routes/crime'
import { typesRouter } from './routes/crimetypes'
import { subdivisionsRouter } from './routes/subdivisions'

const v1Router = Router()

v1Router.use('/crimes', crimesRouter)
v1Router.use('/countries', countriesRouter)
v1Router.use('/accused', accusedRouter)
v1Router.use('/subdivisions', subdivisionsRouter)
v1Router.use('/types', typesRouter)

export { v1Router }
