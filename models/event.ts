import { Model, Column, Table, PrimaryKey, CreatedAt, UpdatedAt } from 'sequelize-typescript'

@Table
export class Event extends Model<Event> {
  @PrimaryKey
  @Column
  id!: number

  @Column
  title!: string

  @Column
  contents!: Text

  @Column
  place!: string

  @Column
  zipCode?: string

  @Column
  address?: string

  @Column
  pool?: number

  @Column
  contact?: string

  @Column
  startDate?: Date

  @Column
  endDate?: Date

  @Column
  displayYn?: boolean

  @Column
  hit?: number

  @CreatedAt
  @Column
  createdAt?: Date

  @UpdatedAt
  @Column
  updatedAt?: Date
}
