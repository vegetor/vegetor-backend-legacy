const Sequelize = require('sequelize')

const config = require('../config')
const db = {}

const sequelize = new Sequelize(
  config.database,
  config.userName,
  config.password,
  {
    host: config.host,
    dialect: config.dialect
  }
)

db.sequelize = sequelize
db.Sequelize = Sequelize

db.Board = require('./board')(sequelize, Sequelize)
db.Event = require('./event')(sequelize, Sequelize)
db.EventFile = require('./event_file')(sequelize, Sequelize)
db.File = require('./file')(sequelize, Sequelize)
db.Participant = require('./participant')(sequelize, Sequelize)
db.Place = require('./place')(sequelize, Sequelize)
db.StarRate = require('./star_rate')(sequelize, Sequelize)
db.User = require('./user')(sequelize, Sequelize)
db.UserLike = require('./user_like')(sequelize, Sequelize)

module.exports = db
