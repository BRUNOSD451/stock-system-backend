import { ProductsRepository } from "../repository/productsRepository";



export class ProductsService{

private productsRepository = new ProductsRepository()

async findAll(){

    return await this.productsRepository.findAll()

}


async findById(id:number){

return await this.productsRepository.findById(id)

}


async create(newProduct:any){

return await this.productsRepository.create(newProduct)

}


async delete(id:number){

    return await this.productsRepository.delete(id)

}

async update(updateData:any, id:number){

    return await this.productsRepository.update(updateData, id)

}

}