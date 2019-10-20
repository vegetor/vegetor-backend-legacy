import { Model, Column, Table, PrimaryKey, CreatedAt, UpdatedAt } from 'sequelize-typescript'

@Table
export default class Place extends Model<Place> {

  @PrimaryKey
  @Column
  id!: number

  @Column
  file_id?: string

  @Column
  name?: string

  @Column
  open_now?: string

  @Column
  contact?: string

  @Column
  location?: string

  @Column
  zipcode?: string

  @Column
  address?: string

  @Column
  contents?: string

  @Column
  star_rate?: number

  @Column
  url?: string

  @Column
  instragram_url?: string

  @Column
  menus?: string

  @Column
  category?: string
}
