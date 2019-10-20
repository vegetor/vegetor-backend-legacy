import { Router } from 'express'
import File from '../models/file'

export const files = Router()

files.get('/', async (req, res, next) => {
  try {
    res.json(await File.findAll())
  } catch (e) {
    next(e)
  }
})
