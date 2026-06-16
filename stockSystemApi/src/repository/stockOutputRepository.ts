import { stockOutputs } from "../database/db";
import { NotFoundError } from "../utils/errors";

export class StockOutputRepository {
  async findAll() {
    return stockOutputs;
  }

  async findById(id: number) {
    const stockOutput = stockOutputs.find((s) => s.stockOutputId == id);

    if (!stockOutput) {
      throw new NotFoundError("Stock output not found");
    }

    return stockOutput;
  }

  async output(newStockOutput: any) {
    stockOutputs.push(newStockOutput);
    const stockOutput = stockOutputs.find(
      (s) => s.stockOutputId == newStockOutput.stockOutputId
    );

    if (!stockOutput) {
      throw new NotFoundError("Stock output not found after creation");
    }

    return stockOutput.stockOutputId;
  }

  async delete(id: number) {
    const index: number = stockOutputs.findIndex((s) => s.stockOutputId == id);

    if (index === -1) {
      throw new NotFoundError("Stock output not found");
    }

    stockOutputs.splice(index, 1);
    return stockOutputs;
  }

  async update(updateData: any, id: number) {
    const stockOutput = stockOutputs.find((s) => s.stockOutputId == id);

    if (!stockOutput) {
      throw new NotFoundError("Stock output not found");
    }

    Object.assign(stockOutput, updateData);
    return stockOutput;
  }
}
