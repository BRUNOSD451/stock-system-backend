import { stockInputs } from "../database/db";
import { NotFoundError } from "../utils/errors";

export class StockInputRepository {
  async findAll() {
    return stockInputs;
  }

  async findById(id: number) {
    const stockInput = stockInputs.find((s) => s.stockInputId == id);

    if (!stockInput) {
      throw new NotFoundError("Stock input not found");
    }

    return stockInput;
  }

  async input(newStockInput: any) {
    stockInputs.push(newStockInput);
    const stockInput = stockInputs.find(
      (s) => s.stockInputId == newStockInput.stockInputId
    );

    if (!stockInput) {
      throw new NotFoundError("Stock input not found after creation");
    }

    return stockInput;
  }

  async delete(id: number) {
    const index: number = stockInputs.findIndex((s) => s.stockInputId == id);

    if (index === -1) {
      throw new NotFoundError("Stock input not found");
    }

    stockInputs.splice(index, 1);
    return stockInputs;
  }

  async update(updateData: any, id: number) {
    const stockInput = stockInputs.find((s) => s.stockInputId == id);

    if (!stockInput) {
      throw new NotFoundError("Stock input not found");
    }

    Object.assign(stockInput, updateData);
    return stockInput;
  }
}
