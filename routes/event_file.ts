import { Router } from 'express'
import EventFile from '../models/event_file'

export const eventFiles = Router()

eventFiles.get('/', async (req, res, next) => {
  try {
    res.json(await EventFile.findAll())
  } catch (e) {
    next(e)
  }
})
