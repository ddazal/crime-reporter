import { Router, Request, Response } from 'express'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.json({ data: ['Colombia', 'Argentina'] })
})

export { router as countriesRouter }
