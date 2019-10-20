import { Model, Column, Table, PrimaryKey, CreatedAt, UpdatedAt } from 'sequelize-typescript'

@Table
export default class File extends Model<File> {

  @PrimaryKey
  @Column
  id!: number

  @Column
  file_name?: string

  @Column
  file_path?: string

  @Column
  url?: string

  @Column
  hash?: string

  @CreatedAt
  @Column
  created_at?: Date

  @UpdatedAt
  @Column
  updated_at?: Date
}
