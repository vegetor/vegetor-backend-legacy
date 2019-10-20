import { Model, Column, Table, PrimaryKey, CreatedAt } from 'sequelize-typescript'

@Table
export class EventFile extends Model<EventFile> {
  @PrimaryKey
  @Column
  id!: number

  @CreatedAt
  @Column
  createdAt?: Date
}
