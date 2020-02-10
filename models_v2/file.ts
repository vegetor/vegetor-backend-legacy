import { Model, Column, Table, PrimaryKey, CreatedAt, UpdatedAt, AutoIncrement, AllowNull } from 'sequelize-typescript'

@Table
export default class File extends Model<File> {

  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number

  @AllowNull(false)
  @Column
  file_name?: string

  @AllowNull(false)
  @Column
  file_path?: string

  @AllowNull(false)
  @Column
  url?: string

  @CreatedAt
  @Column
  created_at?: Date

  @UpdatedAt
  @Column
  updated_at?: Date
}
