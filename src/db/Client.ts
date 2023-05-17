import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  timestamps: false,
  tableName: "clients",
})

export class Client extends Model{
  @Column({
    type: DataType.TEXT,
    allowNull: false
  }) name!: string;
  @Column({
    type: DataType.INTEGER,
    allowNull: true
  }) rating!: number;
}
