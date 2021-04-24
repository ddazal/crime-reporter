import { Router, Request, Response, NextFunction } from 'express'
import { crimeService } from '../../core/crimes/application'
import { ApiError } from '../utils/error'
import { getParams } from '../params'
import { useSchema } from '../utils/validate'
import { Country } from '../../core/countries/domain/Country'

const router = Router()

router.get('/', getParams, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { locals } = res
    const crimes = await crimeService.getAll(locals.pagination.nPage)
    res.json({ data: crimes })
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const crime = await crimeService.findById(req.params.id)
    if (!crime) {
      return next(new ApiError('Crime not found', 404))
    }
    res.json({ data: crime })
  } catch (error) {
    next(error)
  }
})

router.post('/', useSchema(Country.schema), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const insertedId = await crimeService.createCrime(req.body)
    res.status(201).json({ data: { id: insertedId } })
  } catch (error) {
    next(error)
  }
})

export { router as crimesRouter }
