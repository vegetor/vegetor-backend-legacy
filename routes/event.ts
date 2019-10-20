import { Router } from 'express'
import Event from '../models/event'

export const events = Router()

events.get('/', async (req, res, next) => {
  try {
    res.json(await Event.findAll())
  } catch (e) {
    next(e)
  }
})
