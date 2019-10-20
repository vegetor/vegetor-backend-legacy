import { Model, Column, Table, PrimaryKey, CreatedAt, UpdatedAt } from 'sequelize-typescript'

@Table
export class File extends Model<File> {
  @PrimaryKey
  @Column
  id!: number

  @Column
  fileName?: number

  @Column
  filePath!: number

  @Column
  url!: string

  @Column
  hash!: string

  @CreatedAt
  @Column
  createdAt?: Date

  @UpdatedAt
  @Column
  updatedAt?: Date
}
