import { Request, Response } from 'express'

function errorHandler (err: Error, req: Request, res: Response): void {
  console.error(err)
  res.status(500).send('Something went wrong')
}

export default errorHandler
