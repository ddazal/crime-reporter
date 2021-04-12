import { Router, Request, Response, NextFunction } from 'express'
import { countryService } from '../../core/countries/application'

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
    res.json({ data: country || null })
  } catch (error) {
    next(error)
  }
})

router.get('/:code/subdivisions', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { code } = req.params
    const subdivisions = await countryService.getSubdivisions(code.toUpperCase())
    res.json({ data: subdivisions })
  } catch (error) {
    next(error)
  }
})

export { router as countriesRouter }
