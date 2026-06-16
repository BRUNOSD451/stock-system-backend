import { suppliers } from "../database/db";
import { NotFoundError } from "../utils/errors";

export class SuppliersRepository {
  async findAll() {
    return suppliers;
  }

  async findById(id: number) {
    const searchsupplier = suppliers.find((s) => s.supplierId == id);

    if (!searchsupplier) {
      throw new NotFoundError("Supplier not found");
    }

    return searchsupplier;
  }

  async create(newSupplier: any) {
    suppliers.push(newSupplier);
    return suppliers;
  }

  async delete(id: number) {
    const index: number = suppliers.findIndex((s) => s.supplierId == id);

    if (index === -1) {
      throw new NotFoundError("Supplier not found");
    }

    suppliers.splice(index, 1);

    return suppliers;
  }

  async update(updateData: any, id: number) {
    const supplier = suppliers.find((s) => s.supplierId == id);

    if (!supplier) {
      throw new NotFoundError("Supplier not found");
    }

    Object.assign(supplier, updateData);

    return supplier;
  }
}
