import { Model, Column, Table, PrimaryKey, CreatedAt, UpdatedAt } from 'sequelize-typescript'

@Table
export class Board extends Model<Board> {
  @PrimaryKey
  @Column
  id!: bigint

  @Column
  type!: string

  @Column
  title!: string

  @Column
  contents!: string

  @Column
  display!: string

  @Column
  hit?: string

  @Column
  priority?: string

  @CreatedAt
  @Column
  createdAt?: Date

  @UpdatedAt
  @Column
  updatedAt?: Date
}
