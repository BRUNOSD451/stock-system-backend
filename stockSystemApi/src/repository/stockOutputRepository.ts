import { stockOutputs } from "../database/db";

export class StockOutputRepository {
    async findAll() {
        return stockOutputs;
    }

    async findById(id: number) {
        return stockOutputs.find((s) => s.stockOutputId == id);
    }

    async output(newStockOutput: any) {
        stockOutputs.push(newStockOutput);
        return stockOutputs;
    }

    async delete(id: number) {
        const index: number = stockOutputs.findIndex((s) => s.stockOutputId == id);
        stockOutputs.splice(index, 1);
        return stockOutputs;
    }

    async update(updateData: any, id: number) {
        const stockOutput = stockOutputs.find((s) => s.stockOutputId == id);
        if (!stockOutput) {
            return null;
        }
        Object.assign(stockOutput, updateData);
        return stockOutput;
    }
}
