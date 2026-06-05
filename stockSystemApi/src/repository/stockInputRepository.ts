import { stockInputs } from "../database/db";

export class StockInputRepository {
    async findAll() {
        return stockInputs;
    }

    async findById(id: number) {
        return stockInputs.find((s) => s.stockInputId == id);
    }

    async input(newStockInput: any) {
        stockInputs.push(newStockInput);
        const stockInput = stockInputs.find((s)=> s.stockInputId == newStockInput.stockInputId )
        return stockInput;
    }

    async delete(id: number) {
        const index: number = stockInputs.findIndex((s) => s.stockInputId == id);
        stockInputs.splice(index, 1);
        return stockInputs;
    }

    async update(updateData: any, id: number) {
        const stockInput = stockInputs.find((s) => s.stockInputId == id);
        if (!stockInput) {
            return null;
        }
        Object.assign(stockInput, updateData);
        return stockInput;
    }
}
