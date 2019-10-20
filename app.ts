import * as express from 'express'
import * as bodyParser from 'body-parser'
import { boards } from './routes/board'

const app: express.Application = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json({ limit: '5mb' }))

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Expose-Headers', 'x-total-count')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH')
  res.header('Access-Control-Allow-Headers', 'Content-Type,authorization')

  next()
})

app.use('/board', boards)

export default app
