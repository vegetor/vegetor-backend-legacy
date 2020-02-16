import { Table, Column, Model, HasMany, PrimaryKey, AutoIncrement } from 'sequelize-typescript'

interface Board {
}

@Table
class BoardModel extends Model<Board> {

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;
}
