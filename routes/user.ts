import { Router } from 'express'
import User from '../models/user'

export const users = Router()

users.get('/', async (req, res, next) => {
  try {
    res.json(await User.findAll())
  } catch (e) {
    next(e)
  }
})
