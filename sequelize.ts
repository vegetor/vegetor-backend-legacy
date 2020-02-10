import { Sequelize } from 'sequelize-typescript'

export const sequelize = new Sequelize({
  dialect: 'mysql',
  database: 'vegetor',
  host: 'localhost',
  username: 'vegetor',
  password: 'vegetor',
  port: 3306,
  // host: '127.0.0.1',
  // password: 'xzawed85',
  models: [__dirname + '/models_v2']
})
