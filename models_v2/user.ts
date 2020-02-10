import { Model, Column, Table, PrimaryKey, CreatedAt, UpdatedAt, AutoIncrement, Default, AllowNull, Unique } from 'sequelize-typescript'

@Table
export default class User extends Model<User> {

  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number

  @Unique
  @AllowNull(false)
  @Column
  user_id?: string

  @AllowNull(false)
  @Column
  name?: string

  @AllowNull(false)
  @Column
  password?: string

  @AllowNull(false)
  @Column
  password_salt?: string

  @Column
  provider_key?: string

  @Column
  provider_type?: string

  @Column
  provider_version?: string

  @CreatedAt
  @Column
  created_at?: Date

  @UpdatedAt
  @Column
  updated_at?: Date

  @Column
  last_login_at!: Date

  @AllowNull(false)
  @Default('N') // (N)ormal, (S)ecede, (R)est
  @Column
  status!: string
}
