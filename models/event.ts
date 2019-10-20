import { Model, Column, Table, PrimaryKey, CreatedAt, UpdatedAt } from 'sequelize-typescript'

@Table
export default class Event extends Model<Event> {

  @PrimaryKey
  @Column
  id!: number

  @Column
  user_id?: number

  @Column
  file_id?: number

  @Column
  title!: string

  @Column
  contents!: string

  @Column
  location!: string

  @Column
  zipcode!: string

  @Column
  address!: string

  @Column
  pool?: number

  @Column
  contract?: string

  @Column
  start_date?: Date

  @Column
  end_date?: Date

  @Column
  display_yn?: boolean

  @Column
  hit?: number

  @CreatedAt
  @Column
  created_at?: Date

  @UpdatedAt
  @Column
  updated_at?: Date
}
