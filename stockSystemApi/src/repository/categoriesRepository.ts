import { categories } from "../database/db";
import { NotFoundError } from "../utils/errors";

export class CategoryRepository {
  async findAll() {
    return categories;
  }

  async findById(id: number) {
    const searchCategory = categories.find((c) => c.categoryId == id);

    if (!searchCategory) {
      throw new NotFoundError("Category not found");
    }

    return searchCategory;
  }

  async delete(id: number) {
    const indexDelete = categories.findIndex((c) => c.categoryId == id);

    if (indexDelete === -1) {
      throw new NotFoundError("Category not found");
    }

    categories.splice(indexDelete, 1);

    return categories;
  }

  async create(data: any) {
    categories.push(data);
    return categories;
  }

  async update(updateData: any, id: number) {
    const category = categories.find((c) => c.categoryId == id);

    if (!category) {
      throw new NotFoundError("Category not found");
    }

    Object.assign(category, updateData);

    return category;
  }
}
