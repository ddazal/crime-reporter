import { Router, Request, Response, NextFunction } from 'express'
import { accusedService } from '../../core/accused/application'
import { ApiError } from '../utils/error'

const router = Router()

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const country = req.query.country as string
    const accused = await accusedService.getAll({ country })
    res.json({ data: accused })
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const accused = await accusedService.getById(id)
    if (!accused) {
      return next(new ApiError('Accused not found', 404))
    }
    res.json({ data: accused })
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const result = await accusedService.deleteById(id)
    if (!result) {
      return next(new ApiError('Accused not found', 404))
    }
    res.status(204).end()
  } catch (error) {
    next(error)
  }
})

export { router as accusedRouter }
