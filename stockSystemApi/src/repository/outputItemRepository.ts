import { outputItems } from "../database/db";

export class OutputItemRepository {
    async findAll() {
        return outputItems;
    }

    async findById(id: number) {
        return outputItems.find((o) => o.outputItemId == id);
    }

    async create(newOutputItem: any) {
        outputItems.push(newOutputItem);
        return outputItems;
    }

    async delete(id: number) {
        const index: number = outputItems.findIndex((o) => o.outputItemId == id);
        outputItems.splice(index, 1);
        return outputItems;
    }

    async update(updateData: any, id: number) {
        const outputItem = outputItems.find((o) => o.outputItemId == id);
        if (!outputItem) {
            return null;
        }
        Object.assign(outputItem, updateData);
        return outputItem;
    }
}
