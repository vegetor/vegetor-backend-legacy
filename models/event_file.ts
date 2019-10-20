import { Model, Column, Table, CreatedAt } from 'sequelize-typescript'

@Table
export default class EventFile extends Model<EventFile> {
  @Column
  event_id?: number

  @Column
  file_id?: number

  @CreatedAt
  @Column
  created_at?: Date
}
