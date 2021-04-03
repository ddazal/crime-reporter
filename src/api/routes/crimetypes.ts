import { Router, Request, Response } from 'express'
import { crimeTypeService } from '../../core/crime-types/application/'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
  const types = await crimeTypeService.getAll()
  res.json({ data: types })
})

export { router as typesRouter }
