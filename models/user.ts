import { Model, Column, Table, PrimaryKey, CreatedAt, UpdatedAt } from 'sequelize-typescript'

@Table
export default class User extends Model<User> {

  @PrimaryKey
  @Column
  id!: number

  @Column
  user_id?: string

  @Column
  name?: string

  @Column
  password?: string

  @Column
  password_salt?: string

  @Column
  provider_key?: string

  @Column
  provider_type?: string

  @Column
  version?: string

  @CreatedAt
  @Column
  created_at?: Date

  @UpdatedAt
  @Column
  updated_at?: Date

  @Column
  last_login_at!: Date

  @Column
  withdraw!: boolean
}
