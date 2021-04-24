import { Router, Request, Response, NextFunction } from 'express'
import { countryService } from '../../core/countries/application'
import { Country } from '../../core/countries/domain/Country'
import { ApiError } from '../utils/error'
import { useSchema } from '../utils/validate'

const router = Router()

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const countries = await countryService.getAll()
    res.json({ data: countries })
  } catch (error) {
    next(error)
  }
})

router.get('/:code', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { code } = req.params
    const country = await countryService.getByCode(code.toUpperCase())
    if (!country) {
      return next(new ApiError('Country not found', 404))
    }
    res.json({ data: country || null })
  } catch (error) {
    next(error)
  }
})

router.get('/:code/subdivisions', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { code } = req.params
    const subdivisions = await countryService.getSubdivisions(code.toUpperCase())
    if (!subdivisions.length) {
      return next(new ApiError('Country not found', 404))
    }
    res.json({ data: subdivisions })
  } catch (error) {
    next(error)
  }
})

router.patch('/:code', useSchema(Country.schema), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { code } = req.params
    const result = await countryService.updateCountry(code, req.body)
    if (!result) {
      return next(new ApiError('Country not found', 404))
    }
    res.status(204).end()
  } catch (error) {
    next(error)
  }
})

export { router as countriesRouter }
