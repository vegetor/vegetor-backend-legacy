import { Router } from 'express'
import EventDetail from '../models/event_detail'

export const eventDetails = Router()

eventDetails.get('/', async (req, res, next) => {
  try {
    res.json(await EventDetail.findAll())
  } catch (e) {
    next(e)
  }
})
