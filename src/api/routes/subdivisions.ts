import { Router, Request, Response, NextFunction } from 'express'
import { subdivisionService } from '../../core/subdivisions/application'

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
    res.json({ data: subdivision || null })
  } catch (error) {
    next(error)
  }
})

export { router as subdivisionsRouter }
