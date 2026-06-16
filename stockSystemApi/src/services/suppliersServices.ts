import { SuppliersRepository } from "../repository/suppliersRepository";




export class SuppliersService{

private suplierRepository = new SuppliersRepository()


async findAll(){
    return await this.suplierRepository.findAll()
}


async findById(id:number){

return await this.suplierRepository.findById(id)

}



async create(newSupplier:any){

return await this.suplierRepository.create(newSupplier)

}


async delete(id:number){

    return await this.suplierRepository.delete(id)

}

async update(updateData:any, id:number){

    return await this.suplierRepository.update(updateData, id)

}

}