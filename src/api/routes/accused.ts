import { Router, Request, Response, NextFunction } from 'express'
import { accusedService } from '../../core/accused/application'

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
    res.json({ data: accused || null })
  } catch (error) {
    next(error)
  }
})

export { router as accusedRouter }
