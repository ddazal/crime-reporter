import { Router, Request, Response, NextFunction } from 'express'
import { crimeService } from '../../core/crimes/application/'
import { getParams } from '../params'

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
    res.json({ data: crime || null })
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const insertedId = await crimeService.createCrime(req.body)
    res.json({ data: insertedId })
  } catch (error) {
    next(error)
  }
})

export { router as crimesRouter }
