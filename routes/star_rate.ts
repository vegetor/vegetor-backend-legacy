import { Router } from 'express'
import StarRate from '../models/start_rate'

export const starRates = Router()

starRates.get('/', async (req, res, next) => {
  try {
    res.json(await StarRate.findAll())
  } catch (e) {
    next(e)
  }
})
