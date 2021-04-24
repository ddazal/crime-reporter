import { Router, Request, Response, NextFunction } from 'express'
import { crimeTypeService } from '../../core/crime-types/application/'
import { CrimeType } from '../../core/crime-types/domain/CrimeType'
import { ApiError } from '../utils/error'
import { useSchema } from '../utils/validate'

const router = Router()

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const types = await crimeTypeService.getAll()
    res.json({ data: types })
  } catch (error) {
    next(error)
  }
})

router.post('/', useSchema(CrimeType.schema), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const insertedId = await crimeTypeService.createCrimeType(req.body)
    res.status(201).json({ data: { id: insertedId } })
  } catch (error) {
    next(error)
  }
})

router.patch('/:id', useSchema(CrimeType.schema), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const result = await crimeTypeService.updateCrimeType(id, req.body)
    if (!result) {
      return next(new ApiError('Crime type was not updated. Maybe the id is wrong?', 404))
    }
    res.status(204).end()
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
