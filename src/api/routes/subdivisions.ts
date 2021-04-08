import { Router, Request, Response } from 'express'
import { subdivisionService } from '../../core/subdivisions/application'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
  const subdivisions = await subdivisionService.getAll()
  res.json({ data: subdivisions })
})

router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  const subdivision = await subdivisionService.getById(id)
  res.json({ data: subdivision || null })
})

export { router as subdivisionsRouter }
