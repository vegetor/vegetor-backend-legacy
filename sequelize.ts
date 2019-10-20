import { Sequelize } from 'sequelize-typescript'

export const sequelize = new Sequelize({
  models: [__dirname + '/models']
})
