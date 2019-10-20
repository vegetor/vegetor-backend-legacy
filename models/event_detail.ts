import { Model, Column, Table } from 'sequelize-typescript'

@Table
export default class EventDetail extends Model<EventDetail> {

  @Column
  event_id!: number

  @Column
  meta?: string
}
