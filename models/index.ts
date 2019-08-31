const Sequelize = require("sequelize")

const config = require("../config")

const sequelize = new Sequelize(
  config.database,
  config.userName,
  config.password,
  {
    host: config.host,
    dialect: config.dialect
  }
)

module.exports = { sequelize, Sequelize }
