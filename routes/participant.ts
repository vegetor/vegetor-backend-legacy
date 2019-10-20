import { Router } from 'express'
import Participant from '../models/participant'

export const participants = Router()

participants.get('/', async (req, res, next) => {
  try {
    res.json(await Participant.findAll())
  } catch (e) {
    next(e)
  }
})
