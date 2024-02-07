import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: "users",
})
export default class User extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "id",
  })
  id?: number;

  @Column({
    type: DataType.STRING(255),
    field: "name",
  })
  name?: string;

  @Column({
    type: DataType.STRING(255),
    field: "email",
    unique: true,
  })
  email?: string;

  @Column({
    type: DataType.STRING(255),
    field: "password",
  })
  password?: string;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 100,
    field: "points",
  })
  points?: number;
}
