import { Router, Request, Response, NextFunction } from 'express'
import { subdivisionService } from '../../core/subdivisions/application'
import { ApiError } from '../../utils/error'

const router = Router()

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const subdivisions = await subdivisionService.getAll()
    res.json({ data: subdivisions })
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const subdivision = await subdivisionService.getById(id)
    if (!subdivision) {
      return next(new ApiError('Subdivision not found', 404))
    }
    res.json({ data: subdivision })
  } catch (error) {
    next(error)
  }
})

export { router as subdivisionsRouter }
