import { Router, Request, Response } from 'express'
import { crimeService } from '../../core/crimes/application/'
import { getParams } from '../params'

const router = Router()

router.get('/', getParams, async (req: Request, res: Response) => {
  const { locals } = res
  const crimes = await crimeService.getAll(locals.pagination.nPage)
  res.json({ data: crimes })
})

router.get('/:id', async (req: Request, res: Response) => {
  const crime = await crimeService.findById(req.params.id)
  res.json({ data: crime || null })
})

router.post('/', async (req: Request, res: Response) => {
  const insertedId = await crimeService.createCrime(req.body)
  res.json({ data: insertedId })
})

export { router as crimesRouter }
