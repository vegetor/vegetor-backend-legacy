import { Sequelize } from 'sequelize'

const config = require('./config')

export default new Sequelize(
  config.database,
  config.userName,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  }
)
