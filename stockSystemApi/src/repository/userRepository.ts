
import { users } from "../database/db";
import { NotFoundError } from "../utils/errors";

export class UserRepository {
  async findAll() {
    return users;
  }

  async findById(id: number) {
    const user = users.find((u) => u.userId == id);

    if (!user) {
      throw new NotFoundError("User not found");
    }

    return user;
  }

  async create(user: any) {
    users.push(user);
    return user;
  }

  async delete(id: number) {
    const index = users.findIndex((u) => u.userId == id);

    if (index === -1) {
      throw new NotFoundError("User not found");
    }

    users.splice(index, 1);

    return users;
  }

  async update(updateData: any, id: number) {
    const user = users.find((u) => u.userId == id);

    if (!user) {
      throw new NotFoundError("User not found");
    }

    Object.assign(user, updateData);

    return user;
  }
}
