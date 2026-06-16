import { StockOutputRepository } from "../repository/stockOutputRepository";
import { ProductsRepository } from "../repository/productsRepository";
import { OutputItemRepository } from "../repository/outputItemRepository";
export class StockOutputService {
  private stockOutputRepository = new StockOutputRepository();
  private productsRepository = new ProductsRepository();
  private outputItemRepository = new OutputItemRepository();
  async findAll() {
    return await this.stockOutputRepository.findAll();
  }

  async findById(id: number) {
    return await this.stockOutputRepository.findById(id);
  }

  async output(newStockOutput: any) {
    const stockOutputId = await this.stockOutputRepository.output(
      newStockOutput.stockOutput
    );
    await this.productsRepository.decrease(newStockOutput.products);
    await this.outputItemRepository.output(
      newStockOutput.products,
      stockOutputId
    );

    return { stockOutputId };
  }

  async delete(id: number) {
    return await this.stockOutputRepository.delete(id);
  }

  async update(updateData: any, id: number) {
    return await this.stockOutputRepository.update(updateData, id);
  }
}
