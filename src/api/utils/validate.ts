import Joi from 'joi'
import { ApiError } from './error'
import { NextFunction, Request, Response } from 'express'

function useSchema (schema: Joi.ObjectSchema<any>) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body || {})
    if (error) {
      return next(new ApiError(error.message, 400))
    }
    next()
  }
}

export { useSchema }
