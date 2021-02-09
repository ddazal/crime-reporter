import { Router, Request, Response } from 'express'
import { crimeRepository } from '../repositories/'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
  const crimes = await crimeRepository.getAll()
  return res.json(crimes)
})

router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  const crime = await crimeRepository.getById(id)
  return res.json(crime)
})

export { router as crimesRouter }
