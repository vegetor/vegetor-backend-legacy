import { Model, Column, Table, PrimaryKey, CreatedAt, UpdatedAt } from 'sequelize-typescript'

@Table
export default class StarRate extends Model<StarRate> {

  @PrimaryKey
  @Column
  id!: number

  @Column
  user_id?: number

  @Column
  place_id?: number

  @Column
  star_rate?: number
}
