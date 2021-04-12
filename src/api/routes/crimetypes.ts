import { Router, Request, Response, NextFunction } from 'express'
import { crimeTypeService } from '../../core/crime-types/application/'

const router = Router()

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const types = await crimeTypeService.getAll()
    res.json({ data: types })
  } catch (error) {
    next(error)
  }
})

export { router as typesRouter }
