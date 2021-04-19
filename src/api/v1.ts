import { Router, Request, Response, NextFunction } from 'express'
import { ApiError } from '../utils/error'
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

v1Router.use((req: Request, res: Response, next: NextFunction) => {
  return next(new ApiError('Resource not found', 404))
})

v1Router.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (process.env.NODE_ENV !== 'production') {
    console.error(err.message)
    console.error(err.stack)
  }
  const status = err.status || 500
  res.status(status).json({
    data: null,
    error: err.message,
    status
  })
})

export { v1Router }
