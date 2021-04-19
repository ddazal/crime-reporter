import { Router, Request, Response, NextFunction } from 'express'
import { crimeTypeService } from '../../core/crime-types/application/'
import { ApiError } from '../../utils/error'
import { validateCrimeTypeSchema } from '../middlewares/crimetypes'

const router = Router()

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const types = await crimeTypeService.getAll()
    res.json({ data: types })
  } catch (error) {
    next(error)
  }
})

router.post('/', validateCrimeTypeSchema, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const insertedId = await crimeTypeService.createCrimeType(req.body)
    res.status(201).json({ data: { id: insertedId } })
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const result = await crimeTypeService.deleteCrimeType(id)
    if (!result) {
      return next(new ApiError('Crime type was not deleted', 404))
    }
    res.status(204).end()
  } catch (error) {
    next(error)
  }
})

export { router as typesRouter }
