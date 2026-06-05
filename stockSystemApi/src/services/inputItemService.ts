import { InputItemRepository } from "../repository/inputItemRepository";

export class InputItemService {
    private inputItemRepository = new InputItemRepository();

    async findAll() {
        return await this.inputItemRepository.findAll();
    }

    async findById(id: number) {
        return await this.inputItemRepository.findById(id);
    }

    async create(newInputItem: any) {
        return await this.inputItemRepository.create(newInputItem);
    }

    async delete(id: number) {
        return await this.inputItemRepository.delete(id);
    }

    async update(updateData: any, id: number) {
        return await this.inputItemRepository.update(updateData, id);
    }
}
