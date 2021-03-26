import { Router, Request, Response } from 'express'
import { accusedService } from '../../core/accused/application'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
  const accused = await accusedService.getAll()
  res.json({ data: accused })
})

router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  const accused = await accusedService.getById(id)
  res.json({ data: accused || null })
})

export { router as accusedRouter }
