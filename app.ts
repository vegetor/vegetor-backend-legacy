import * as express from 'express'
import * as bodyParser from 'body-parser'

import { boards } from './routes/board'
import { events } from './routes/event'
import { eventDetails } from './routes/event_detail'
import { eventFiles } from './routes/event_file'
import { files } from './routes/file'
import { participants } from './routes/participant'
import { places } from './routes/place'
import { starRates } from './routes/star_rate'
import { users } from './routes/user'
import { userLikes } from './routes/user_like'

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
app.use('/event', events)
app.use('/event/detail', eventDetails)
app.use('/event/file', eventFiles)
app.use('/file', files)
app.use('/participant', participants)
app.use('/place', places)
app.use('/star-rate', starRates)
app.use('/user', users)
app.use('/user-like', userLikes)

export default app
