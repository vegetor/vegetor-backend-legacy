import { Model, Column, Table, PrimaryKey, CreatedAt, UpdatedAt } from 'sequelize-typescript'

@Table
export default class UserLike extends Model<UserLike> {

  @PrimaryKey
  @Column
  id!: number

  @Column
  from_id?: number

  @Column
  user_id?: number

  @Column
  from?: string

  @CreatedAt
  @Column
  created_at?: Date

  @UpdatedAt
  @Column
  updated_at?: Date
}
