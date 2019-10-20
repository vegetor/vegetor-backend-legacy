import { Router } from 'express'
import UserLike from '../models/user_like'

export const userLikes = Router()

userLikes.get('/', async (req, res, next) => {
  try {
    res.json(await UserLike.findAll())
  } catch (e) {
    next(e)
  }
})
