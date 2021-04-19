import { NextFunction, Request, Response } from 'express'
import Joi from 'joi'
import { ApiError } from '../../utils/error'

const schema = Joi.object({
  name: Joi.string().required()
}).unknown(false)

function validateCrimeTypeSchema (req: Request, res: Response, next: NextFunction) {
  const { error } = schema.validate(req.body || {})
  if (error) {
    return next(new ApiError(error.message, 400))
  }
  next()
}

export { validateCrimeTypeSchema }
