import { Router, Request, Response } from 'express'
import { crimeService } from '../../core/crimes/application/'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
  const crimes = await crimeService.getAll()
  res.json({ data: crimes })
})

router.get('/:id', async (req: Request, res: Response) => {
  const crime = await crimeService.findById(req.params.id)
  res.json({ data: crime || null })
})

export { router as crimesRouter }
