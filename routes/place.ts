import { Router } from 'express'
import Place from '../models/place'

export const places = Router()

places.get('/', async (req, res, next) => {
  try {
    res.json(await Place.findAll())
  } catch (e) {
    next(e)
  }
})
