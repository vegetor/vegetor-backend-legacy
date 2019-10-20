import { Router } from 'express'
import Board from '../models/board'

export const boards = Router()

boards.get('/', async (req, res, next) => {
  try {
    res.json(await Board.findAll())
  } catch (e) {
    next(e)
  }
})
