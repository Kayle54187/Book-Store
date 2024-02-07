import { Op } from "sequelize";
import User from "../models/user.model";

interface IUserRepository {
  save(user: User): Promise<User>;
  retrieveAll(searchParams: { name: string; email: string }): Promise<User[]>;
  retrieveById(userId: number): Promise<User | null>;
  update(user: User): Promise<number>;
  delete(userId: number): Promise<number>;
  deleteAll(): Promise<number>;
}

interface SearchCondition {
  [key: string]: any;
}

class UserRepository implements IUserRepository {
  async save(user: User): Promise<User> {
    try {
      return await User.create({
        name: user.name,
        email: user.email,
        password: user.password,
      });
    } catch (err) {
      throw new Error("Failed to create User!");
    }
  }

  async retrieveAll(searchParams: {
    name?: string;
    email?: string;
  }): Promise<User[]> {
    try {
      let condition: SearchCondition = {};

      if (searchParams?.email)
        condition.email = { [Op.iLike]: `%${searchParams.email}%` };

      if (searchParams?.name)
        condition.title = { [Op.iLike]: `%${searchParams.name}%` };

      return await User.findAll({ where: condition });
    } catch (error) {
      throw new Error("Failed to retrieve Users!");
    }
  }

  async retrieveById(userId: number): Promise<User | null> {
    try {
      return await User.findByPk(userId);
    } catch (error) {
      throw new Error("Failed to retrieve Users!");
    }
  }

  async retrieveByEmail(email: string): Promise<User | null> {
    try {
      return await User.findOne({ where: { email: email } });
    } catch (error) {
      throw new Error("Failed to retrieve User!");
    }
  }

  async update(user: User): Promise<number> {
    const { id, name, email, password } = user;

    try {
      const affectedRows = await User.update(
        { name, email, password },
        { where: { id: id } }
      );

      return affectedRows[0];
    } catch (error) {
      throw new Error("Failed to update User!");
    }
  }

  async delete(userId: number): Promise<number> {
    try {
      const affectedRows = await User.destroy({ where: { id: userId } });

      return affectedRows;
    } catch (error) {
      throw new Error("Failed to delete User!");
    }
  }

  async deleteAll(): Promise<number> {
    try {
      return User.destroy({
        where: {},
        truncate: false,
      });
    } catch (error) {
      throw new Error("Failed to delete Users!");
    }
  }
}

export default new UserRepository();
