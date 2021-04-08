import { Router, Request, Response } from 'express'
import { accusedService } from '../../core/accused/application'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
  const country = req.query.country as string
  const accused = await accusedService.getAll({ country })
  res.json({ data: accused })
})

router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  const accused = await accusedService.getById(id)
  res.json({ data: accused || null })
})

export { router as accusedRouter }
