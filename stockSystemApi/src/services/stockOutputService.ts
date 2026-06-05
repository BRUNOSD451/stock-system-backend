import { StockOutputRepository } from "../repository/stockOutputRepository";
import { ProductsRepository } from "../repository/productsRepository";
export class StockOutputService {
    private stockOutputRepository = new StockOutputRepository();
private productsRepository =  new ProductsRepository()
    async findAll() {
        return await this.stockOutputRepository.findAll();
    }

    async findById(id: number) {
        return await this.stockOutputRepository.findById(id);
    }

    async output(newStockOutput: any) {
     await this.stockOutputRepository.output(newStockOutput.StockOutput);
        await  this.productsRepository.decrease(newStockOutput.products)

    }

    async delete(id: number) {
        return await this.stockOutputRepository.delete(id);
    }

    async update(updateData: any, id: number) {
        return await this.stockOutputRepository.update(updateData, id);
    }
}
