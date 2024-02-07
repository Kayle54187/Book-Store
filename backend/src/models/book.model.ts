import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: "books",
})
export default class Book extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "id",
  })
  id?: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    field: "title",
  })
  title!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    field: "writer",
  })
  writer!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: true,
    defaultValue: "",
    field: "cover_image",
  })
  cover_image!: boolean;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: "points",
  })
  points!: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    field: "tags",
  })
  tags!: string;
}
