import { StockInputRepository } from "../repository/stockInputRepository";
import { ProductsRepository } from "../repository/productsRepository";
import { InputItemRepository } from "../repository/inputItemRepository";
export class StockInputService {
    private stockInputRepository = new StockInputRepository();
    private productRepository = new ProductsRepository()
    private inputItemRepository  = new InputItemRepository()
    async findAll() {
        return await this.stockInputRepository.findAll();
    }

    async findById(id: number) {
        return await this.stockInputRepository.findById(id);
    }

    async input(newStockInput: any) {

        const listProducts :any = newStockInput.products
      
         await this.productRepository.increase(listProducts)
        const stockInput =   await this.stockInputRepository.input(newStockInput.stockInput)
        await this.inputItemRepository.input(listProducts  , stockInput.stockInputId )


     return stockInput
    }

    async delete(id: number) {
        return await this.stockInputRepository.delete(id);
    }

    async update(updateData: any, id: number) {
        return await this.stockInputRepository.update(updateData, id);
    }
}
