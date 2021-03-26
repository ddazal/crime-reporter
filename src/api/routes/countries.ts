import { Router, Request, Response } from 'express'
import { countryService } from '../../core/countries/application'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
  const countries = await countryService.getAll()
  res.json({ data: countries })
})

router.get('/:code', async (req: Request, res: Response) => {
  const { code } = req.params
  const country = await countryService.getByCode(code.toUpperCase())
  res.json({ data: country || null })
})

export { router as countriesRouter }
