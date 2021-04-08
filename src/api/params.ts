import { NextFunction, Request, Response } from 'express'

function getParams (req: Request, res: Response, next: NextFunction) {
  const page = req.query.page as string
  let nPage = Number.parseInt(page, 10)
  if (Number.isNaN(nPage)) {
    nPage = 1
  }
  res.locals.pagination = { nPage }
  next()
}

export { getParams }
