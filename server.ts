require('dotenv').config()

import express from 'express'

const app = express()
const PORT = process.env.PORT || 8080
const routes = require('./routes')
const sequelize = require('./models').sequelize
sequelize.sync()

app.use('*', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.setHeader('Expires', '-1')
  res.setHeader('Cache-Control', 'must-revalidate, private')
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')

  next()
})

app.use('/', routes)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
})
