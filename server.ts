require('dotenv').config()

import express from 'express'

const app = express()
const PORT = process.env.PORT || 8080

app.use('*', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.setHeader('Expires', '-1')
  res.setHeader('Cache-Control', 'must-revalidate, private')
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')

  next()
})

app.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
})

export default app