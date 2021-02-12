import { Router, Request, Response } from 'express'
import { CrimeService } from '../../modules/crimes/application'
import { MongoCrimeRepository } from '../../modules/crimes/infra/MongoCrimeRepository'

const router = Router()
const repo = new MongoCrimeRepository()
const service = new CrimeService(repo)

router.get('/', async (req: Request, res: Response) => {
  const crimes = await service.find()
  res.json(crimes)
})

router.get('/:id', async (req: Request, res: Response) => {
  const crime = await service.findById(req.params.id)
  res.json(crime)
})

export { router as crimesRouter }
