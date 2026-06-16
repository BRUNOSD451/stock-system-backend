import { outputItems } from "../database/db";
import { NotFoundError } from "../utils/errors";

export class OutputItemRepository {
  async findAll() {
    return outputItems;
  }

  async findById(id: number) {
    const outputItem = outputItems.find((o) => o.outputItemId == id);

    if (!outputItem) {
      throw new NotFoundError("Output item not found");
    }

    return outputItem;
  }

  async create(newOutputItem: any) {
    outputItems.push(newOutputItem);
    return outputItems;
  }

  async delete(id: number) {
    const index: number = outputItems.findIndex((o) => o.outputItemId == id);

    if (index === -1) {
      throw new NotFoundError("Output item not found");
    }

    outputItems.splice(index, 1);
    return outputItems;
  }

  async update(updateData: any, id: number) {
    const outputItem = outputItems.find((o) => o.outputItemId == id);

    if (!outputItem) {
      throw new NotFoundError("Output item not found");
    }

    Object.assign(outputItem, updateData);
    return outputItem;
  }

  async output(productsList: any, stockOutputId: number) {
    for (let i = 0; i < productsList.length; i++) {
      const item = productsList[i];

      if (!item.productId || !item.productQuantity) {
        throw new NotFoundError(
          `Invalid product data at index ${i}: productId and quantity are required`
        );
      }

      const newData = {
        outputItemId: Date.now() + i,
        stockOutputId: stockOutputId,
        productId: item.productId,
        quantity: item.productQuantity,
      };

      outputItems.push(newData);
    }
  }
}
