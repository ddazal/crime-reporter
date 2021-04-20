import { NextFunction, Request, Response } from 'express'
import Joi from 'joi'
import { ApiError } from '../../utils/error'

const schema = Joi.object({
  name: Joi.string(),
  code: Joi.string().length(2)
}).min(1).unknown(false)

function validateCountrySchema (req: Request, res: Response, next: NextFunction) {
  const { error } = schema.validate(req.body || {})
  if (error) {
    return next(new ApiError(error.message, 400))
  }
  if (req.body.code) {
    req.body.code = req.body.code.toUpperCase()
  }
  next()
}

export { validateCountrySchema }
