import { inputItems } from "../database/db";
import { NotFoundError } from "../utils/errors";

export class InputItemRepository {
  async findAll() {
    return inputItems;
  }

  async findById(id: number) {
    const inputItem = inputItems.find((i) => i.inputItemId == id);

    if (!inputItem) {
      throw new NotFoundError("Input item not found");
    }

    return inputItem;
  }

  async create(newInputItem: any) {
    inputItems.push(newInputItem);
    return inputItems;
  }

  async delete(id: number) {
    const index: number = inputItems.findIndex((i) => i.inputItemId == id);

    if (index === -1) {
      throw new NotFoundError("Input item not found");
    }

    inputItems.splice(index, 1);
    return inputItems;
  }

  async update(updateData: any, id: number) {
    const inputItem = inputItems.find((i) => i.inputItemId == id);

    if (!inputItem) {
      throw new NotFoundError("Input item not found");
    }

    Object.assign(inputItem, updateData);
    return inputItem;
  }

  async input(listProducts: any, stockInputId: number) {
    for (let i = 0; i < listProducts.length; i++) {
      const item = listProducts[i];

      if (!item.productId || !item.productQuantity) {
        throw new NotFoundError(
          `Invalid product data at index ${i}: productId and quantity are required`
        );
      }

      const newData = {
        inputItemId: Date.now() + i,
        stockInputId: stockInputId,
        productId: item.productId,
        quantity: item.productQuantity,
      };

      inputItems.push(newData);
    }
  }
}
