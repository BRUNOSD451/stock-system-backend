import { CategoryRepository } from "../repository/categoriesRepository";



export class CategoriesService{
private categoryRepository = new CategoryRepository()
async findAll(){

    return await this.categoryRepository.findAll()
}


async findById(id:number){
    return await this.categoryRepository.findById(id)
}

async delete(id:number){

return await this.categoryRepository.delete(id)

}

async create(user:any){
    return await this.categoryRepository.create(user)
}

async update(updateData:any, id:number){

    return await this.categoryRepository.update(updateData, id)

}

}