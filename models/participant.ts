import { Model, Column, Table, PrimaryKey, CreatedAt, UpdatedAt } from 'sequelize-typescript'

@Table
export default class Participant extends Model<Participant> {

  @PrimaryKey
  @Column
  id!: number

  @Column
  event_id?: number

  @Column
  user_id?: number

  @CreatedAt
  @Column
  created_at?: Date

  @UpdatedAt
  @Column
  updated_at?: Date
}
