import { OutputItemRepository } from "../repository/outputItemRepository";

export class OutputItemService {
    private outputItemRepository = new OutputItemRepository();

    async findAll() {
        return await this.outputItemRepository.findAll();
    }

    async findById(id: number) {
        return await this.outputItemRepository.findById(id);
    }

    async create(newOutputItem: any) {
        return await this.outputItemRepository.create(newOutputItem);
    }

    async delete(id: number) {
        return await this.outputItemRepository.delete(id);
    }

    async update(updateData: any, id: number) {
        return await this.outputItemRepository.update(updateData, id);
    }
}
